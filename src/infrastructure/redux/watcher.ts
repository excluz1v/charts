import { all } from 'redux-saga/effects'
import {userWatcher} from "../modules/user/saga/watcher";
import {initWatcher} from "../modules/init/watcher";

export default function* rootWatcher() {

    yield all([...userWatcher, ...initWatcher])
}
