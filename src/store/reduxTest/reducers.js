import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { SAGA_TEST_RESULT, WRITE_ANY } from "./actions";

const initialState = fromJS({
    data1: '',
    data2: '',
    sagaResult: ''
})

const forTheTest = handleActions(
    {
        [WRITE_ANY]: (state, action) => {
            const {value} = action.payload;
            return state.set('data1', value);
        },
        ['RESULT_PENDING']: (state, action) => {
            const {value} = action.payload;
            return state.set('pending', value);
            
        },
        ['RESULT_TEST_ONE']: (state, action) => {
            console.log("saga test Reducer 페이지 >> " , action)
            const {value} = action.payload;
            return state.set('sagaResult', value);
        }
    },
    initialState
);

export default forTheTest;