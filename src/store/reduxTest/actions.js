import { createAction } from "redux-actions";

export const WRITE_ANY = 'haTest/WRITE_ANY';
export const SAGA_TEST = 'haTest/SAGA_TEST';
export const SAGA_TEST_RESULT = 'haTest/SAGA_TEST_RESULT';


export const writeAny = createAction(WRITE_ANY, (value) => ({value}));
export const sagaTest = createAction(SAGA_TEST);
// export const sagaTestResult = createAction(SAGA_TEST_RESULT, (value) => ({value}))