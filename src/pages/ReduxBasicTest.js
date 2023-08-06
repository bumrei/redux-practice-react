import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reduxTest from '../store/reduxTest/actions';
import * as multiReducer from '../store/starwarsInfo/actions';

const ReduxBasicTest = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [contentTwo, setContentTwo] = useState('');
    const result = useSelector((state) => state.forTheTest);
    const resultTwo = useSelector((state) => state.multiTest);

    const handleRedux = () => {
        dispatch(reduxTest.writeAny(content));
        setContent('');
    }

    const handleMultiReducer = () => {
        dispatch(multiReducer.multiReducerTest(contentTwo));
        setContentTwo('');
    }

    return (
        <div>
            <h1>Here is the page for the redux basic test</h1>
            <input onChange={(e) => setContent(e.target.value)} value={content} />
            <button type='button' onClick={handleRedux}>redux Data set</button>
            <h2>{result.getIn(['data1'])}</h2>
            <br />
            <br />
            <br />
            <br />
            <h1>This is the part for the multi reducer test</h1>
            <input value={contentTwo} onChange={(e) => setContentTwo(e.target.value)}/>
            <button type='button' onClick={handleMultiReducer}>multi Reducer Set</button>
            <h2>{resultTwo.getIn(['data1'])}</h2>
        </div>
    );
};

export default ReduxBasicTest;