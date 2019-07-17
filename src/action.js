import * as action from './constants';

export const loading = () => ({
    type: action.LOADING
})

//asynchronous action
export const AgeUp = () => (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
        dispatch(ageUpAsynch());
    }, 5000);
}

export const ageUpAsynch = () => ({
    type: action.AGE_UP,
    payload: 1
})

//synchronous action
export const AgeDown = () => ({
    type: action.AGE_DOWN,
    payload: 1
})

export const DeleteItem = (i) => ({
    type: action.DELETE,
    payload: i
})

export const updateA = () => ({
    type: action.UPDATE_A
})

export const updateB = () => ({
    type: action.UPDATE_B
})