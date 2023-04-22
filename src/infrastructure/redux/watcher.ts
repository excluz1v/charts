import { all } from 'redux-saga/effects'
import {userWatcher} from "../modules/user/saga/watcher";

export default function* rootWatcher() {

    yield all([...userWatcher])
}
