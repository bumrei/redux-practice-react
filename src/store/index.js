import { combineReducers } from "redux";
import forTheTest from "./reduxTest/reducers";
import multiTest from "./starwarsInfo/reducers";
import apiSaga from "./reduxTest/saga";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    forTheTest,
    multiTest
})

export function* rootSaga() {
    yield all([
        apiSaga()
    ])
}

export default rootReducer;