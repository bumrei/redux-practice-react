import { combineReducers } from "redux";
import forTheTest from "./reduxTest/reducers";
import multiTest from "./starwarsInfo/reducers";

const rootReducer = combineReducers({
    forTheTest,
    multiTest
})

export default rootReducer;