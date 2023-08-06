import { createAction } from "redux-actions";

export const PLUS_ONE = 'haTest/PLUS_ONE';

export const plusOne = createAction(PLUS_ONE, (value) => ({value}))