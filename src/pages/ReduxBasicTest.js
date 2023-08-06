import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reduxTest from '../store/reduxTest/actions';

const ReduxBasicTest = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const result = useSelector((state) => state.forTheTest).toJS()

    const handleRedux = () => {
        dispatch(reduxTest.writeAny(content));
        setContent('');
    }

    return (
        <div>
            <h1>Here is the page for the redux basic test</h1>
            <input onChange={(e) => setContent(e.target.value)} value={content} />
            <button type='button' onClick={handleRedux}>redux Data set</button>
            <h2>{result.data1}</h2>
        </div>
    );
};

export default ReduxBasicTest;