import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { PLUS_ONE } from "./actions";

const initialState = fromJS({
    data1: '',
    data2: '',
})

const forTheTest = handleActions(
    {
        [PLUS_ONE]: (state, action) => {
            console.log("what is the actions >>> " , action);
            const {value} = action.payload;
            return state.set('data1', value);
        }
    },
    initialState
);

export default forTheTest;