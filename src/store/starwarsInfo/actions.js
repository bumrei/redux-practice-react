import { createAction } from "redux-actions";

export const MULTI_REDUCER_TEST = 'haTest2/MULTI_REDUCER_TEST';

export const multiReducerTest = createAction(MULTI_REDUCER_TEST, (value) => ({value}))