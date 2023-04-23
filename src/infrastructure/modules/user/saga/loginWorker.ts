import {call} from 'redux-saga/effects'
import {userService} from "../../../service/UserService/UserService";


export function* loginWorker (action){
    const {payload} = action
    console.log(payload)
    yield call([userService, userService.login], payload)
}
