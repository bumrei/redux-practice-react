import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { WRITE_ANY } from "./actions";

const initialState = fromJS({
    data1: '',
    data2: '',
    sagaResult: 'none'
    
})

const forTheTest = handleActions(
    {
        [WRITE_ANY]: (state, action) => {
            const {value} = action.payload;
            return state.set('data1', value);
        },
        'RESULT_PENDING': (state, action) => {
            const {value} = action.payload;
            return state.set('pending', value);
            
        },
        'STARWARS_CALL_SUCCESS': (state, action) => {
            console.log("saga test Reducer 페이지 >> " , action)
            const {value} = action.payload;
            return state.set('starwarsResult', value);
        },
    },
    initialState
);

export default forTheTest;