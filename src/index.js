import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterHome from './routes/RouterHome';
import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from '@reduxjs/toolkit';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { Iterable } from "immutable";

const isSerializable = (value) => {
  
  /**
   * Iterable 뜻 : 반복 가능한 객체
   * 
   * -> Array, String 그리고 ES6 에 추가된 Map, Set.
   * 
   * immutable dependency 에 fromJS() 로 만들어진 객체는 Map({...}) 이다. 즉 json 의 직렬화가 불가능하다고 한다.
   * 이 기능을 통해 Iterable 객체인 Map 과 Set 의 경우에 발생하는 non-Serialize 문제를 해결.
   */
  const result = Iterable.isIterable(value);
  console.log("Iterable.isIterable(value) 체크 >> " , result);
  /**
   * isPlain() : Plain Value 일 경우 return true
   * 
   * JSON-serializable : JSON 직렬화 가능한. => 타입이 (boolean, number, string, array, plain object) or undefined 일 경우 JSON 직렬화 가능
   * 위 JSON-serializable 일 경우 return true;
   * 
   * 🥊 직렬화란?
   * - 뜻 : 객체를 파일의 형태, 통신하기 쉬운 포맷(ex. JSON)으로 변환 하는 과정을 의미
   * - 객체를 특정 포맷으로 직렬화 하던가 아니면 특정 포맷으로 직렬화된 데이터를 역직렬화하여 특정 객체로 변환.
   * 
   * 🥊 JSON 직렬화란 무엇인가?
   * - 오브젝트와 JSON 포맷을 상호 변환하는 기능.
   * - 예시로 JAVA Spring 에 entity 를 객체로 생성하여 JSON 포맷으로 변환시키는 것.
   * - 또는 JSON 포맷을 JAVA Spring entity 객체로 변환하는것. 이렇게 상호 변환.
   * https://docs.unity3d.com/kr/2018.4/Manual/JSONSerialization.html
   * 
   * 🥊 JavaScript 에서 직렬화 / 역직렬화 방법
   * 1.) 직렬화
   *  - JSON.stringfy(JSON 형식의 객체 ex. {key1 : value1, key2 : value2 ... })
   *    -> 객체 => 문자열로 변환 : 이것을 직렬화라 한다. (Serialize).
   *    -> JSON 통신할때 문자열로 직렬화 하여 BE 로 보내준다.
   * 
   * 2.) 역직렬화
   *  - JSON.parse(JSON 형식의 문자열 ex. "{'key1' : 'value2', 'key2', 'value2'}")
   *    -> 문자열 => 객체로 반환 : 이것을 역직렬화라고 한다. (Deserialize).
   *    -> JSON 통신으로 BE 로부터 받은 문자열을 객체로 역직렬화 하여 사용한다.
   */
  const result2 = isPlain(value);
  console.log("isPlain() check >>> " , result2);

  return Iterable.isIterable(value) || isPlain(value)
}

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

/**
 * https://redux-toolkit.js.org/api/serializabilityMiddleware 참고.
 */
const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [serializableMiddleware],
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterHome />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

