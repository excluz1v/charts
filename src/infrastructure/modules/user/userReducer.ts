import {USER_ACTION_TYPES} from "./actionTypes";


const initialState = {
    user: null,
    loading: false,
    error:null
}

export const userReducer = (state= initialState, action)=>{
switch (action.type){
    case USER_ACTION_TYPES.LOGIN_REQUEST: {
        return {
            ...state,
            loading: true,
            error:null
        }
    }
    case USER_ACTION_TYPES.LOGIN_SUCCESS: {
        return {
            user: action.payload,
            loading: false,
            error: null
        }
    }
    case USER_ACTION_TYPES.LOGIN_FAILURE: {
        return {
            user: null,
            loading: false,
            error: action.payload
        }
    }
    default: return state
}
}
