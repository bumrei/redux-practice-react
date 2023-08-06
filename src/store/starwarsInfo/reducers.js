import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { MULTI_REDUCER_TEST } from "./actions";


const initialState = fromJS({
    data1: '',
    data2: '',
})

const multiTest = handleActions(
    {
        [MULTI_REDUCER_TEST]: (state, action) => {
            const {value} = action.payload;
            return state.set('data1', value);
        }
    },
    initialState
);

export default multiTest;