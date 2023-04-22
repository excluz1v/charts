import {USER_ACTION_TYPES} from "./actionTypes";

export const loginRequest = (payload)=>({
    type: USER_ACTION_TYPES.LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload)=>({
    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload)=>({
    type: USER_ACTION_TYPES.LOGIN_FAILURE,
    payload
})

