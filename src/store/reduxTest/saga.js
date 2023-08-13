import { call, put, takeEvery } from "redux-saga/effects";
import { SAGA_TEST } from "./actions";
import axios from "axios";

function* loadStartwarsMemberOne(action) {
    const {payload} = action;
    yield put({type : 'RESULT_PENDING', payload : {value : true}})

    try {
        const result = yield call(() => (
            axios.get(`https://swapi.dev/api/people/${payload}/`)
        ));
        const {data} = result;
        yield put({type : 'STARWARS_CALL_SUCCESS', payload : {value : data}});
        yield put({type : 'RESULT_PENDING', payload : {value : false}})
    } catch (error) {
        console.log(error.message);
        alert("Error Occured!! \n" + error.message);
        yield put({type : 'RESULT_PENDING', payload : {value : false}})
    }
}

export default function* apiSaga() {
    yield takeEvery(SAGA_TEST, loadStartwarsMemberOne)
}