import { createAction } from "redux-actions";

export const WRITE_ANY = 'haTest/WRITE_ANY';

export const writeAny = createAction(WRITE_ANY, (value) => ({value}))