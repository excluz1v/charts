import { takeLatest } from 'redux-saga/effects'
import {USER_ACTION_TYPES} from "../actionTypes";
import {loginWorker} from "./worker";

export const userWatcher =
    [takeLatest(USER_ACTION_TYPES.LOGIN_REQUEST, loginWorker)]


