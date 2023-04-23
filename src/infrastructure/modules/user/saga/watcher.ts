import { takeLatest } from 'redux-saga/effects'
import {USER_ACTION_TYPES} from "../actionTypes";
import {loginWorker} from "./loginWorker";
import {registrationWorker} from "./registrationWorker";

export const userWatcher =
    [
     takeLatest(USER_ACTION_TYPES.LOGIN_REQUEST, loginWorker),
    takeLatest(USER_ACTION_TYPES.REGISTER_REQUEST, registrationWorker),
    ]



