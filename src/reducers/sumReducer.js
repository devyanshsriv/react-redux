import * as actionType from '../constants';

const initialState = {
    a:1,
    b:1
}

export default ( state = initialState, action) => {
    switch (action.type){
        case actionType.UPDATE_A:
            return{
                ...state,
                a:state.a + state.b
            }
        case actionType.UPDATE_B:
            return{
                ...state,
                b:state.a + state.b
        }
        default:
            return state;
    }
}