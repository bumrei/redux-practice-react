import { call, delay, put, takeEvery } from "redux-saga/effects";
import { SAGA_TEST, sagaTestResult } from "./actions";

function* loadStartwarsMemberOne(action) {
    console.log("saga test SAGA 페이지 작동 확인 >>> " , action)
    const {payload} = action;
    yield put({type : 'RESULT_PENDING', payload : {value : true}})
    // yield call('haha');
    yield delay(500);
    yield put({type : 'RESULT_TEST_ONE', payload : {value : payload}});
    yield put({type : 'RESULT_PENDING', payload : {value : false}})


}

export default function* apiSaga() {
    yield takeEvery(SAGA_TEST, loadStartwarsMemberOne)
}