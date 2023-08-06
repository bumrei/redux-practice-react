import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reduxTest from '../store/reduxTest/actions';

const ReduxBasicTest = () => {
    const dispatch = useDispatch();
    const [haha, setHaha] = useState('');
    const result = useSelector((state) => state.forTheTest).toJS()

    console.log("check >>> ", result.data1)

    const handleRedux = () => {
        console.log("버튼 클릭 ㅊㅋ");
        dispatch(reduxTest.plusOne(haha));
        setHaha('');
    }

    return (
        <div>
            <h1>Here is the page for the redux basic test</h1>
            <input onChange={(e) => setHaha(e.target.value)} value={haha} />
            <button type='button' onClick={handleRedux}>redux Data set</button>
            <h2>{result.data1}</h2>
        </div>
    );
};

export default ReduxBasicTest;