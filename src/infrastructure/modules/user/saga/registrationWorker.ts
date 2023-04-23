import {call} from 'redux-saga/effects'
import {userService} from "../../../service/UserService/UserService";


export function* registrationWorker (action){
    const {payload} = action
    yield call([userService, userService.register], payload)
}
