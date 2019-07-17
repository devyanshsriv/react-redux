import * as actionType from '../constants';

const initialState = {
    age: 21,
    history: []
}

export default ( state = initialState, action) => {

    switch (action.type){
        case actionType.AGE_UP:
            // return {...state, age:state.age+1};
            return{
                ...state,
                age: state.age + action.payload,
                history: state.history.concat({i:Math.random(), age: state.age + action.payload}),
                loading: state.loading = false
            }
        case actionType.AGE_DOWN:
            // return{...state, age:state.age-1};
            return{
                ...state,
                age: state.age - action.payload,
                history: state.history.concat({i:Math.random(), age: state.age - action.payload})
            }
        case actionType.DELETE:
            return{
                ...state,
                history:state.history.filter(el => el.i !== action.payload)
            }
        case actionType.LOADING:
            return {...state,loading:state.loading = true}
        default:
            return state;
    }
}