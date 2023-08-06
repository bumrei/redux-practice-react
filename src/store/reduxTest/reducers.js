import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { WRITE_ANY } from "./actions";

const initialState = fromJS({
    data1: '',
    data2: '',
})

const forTheTest = handleActions(
    {
        [WRITE_ANY]: (state, action) => {
            const {value} = action.payload;
            return state.set('data1', value);
        }
    },
    initialState
);

export default forTheTest;