import {takeLatest} from "redux-saga/effects";
import {APP_INIT} from "./actionTypes";
import {initWorker} from "./worker";

export const initWatcher =
    [
        takeLatest(APP_INIT.APP_INIT, initWorker),
    ]
