import {call} from "redux-saga/effects";
import {userService} from "../../service/UserService/UserService";
import cookie from 'react-cookies'

export function* initWorker (){
    // yield call(cookie.remove, 'XSRF-TOKEN')
    // yield call(cookie.save, 'X-XSRF-TOKEN','eyJpdiI6Ik8weTdhMiszNmRPZGJ6WW1mTmsreWc9PSIsInZhbHVlIjoiSlZ2RWwxTU9uSm5mZDlwc1FUaW03cWJZc2UvZ3M2VExKcGh3MXFiNm5aelFSZEVjbVNrd3BVeXROaUNHWC96cGVad09CbFc4NWdnblRGVlU2YUxJa3RFMnJMRThOMnI3bHJkbThMZGEwS3E3anRtbXJCdUoyT1RJMkRrN01yLy8iLCJtYWMiOiJhNjFkYmExMThkY2QxZTIzMWJmMGRmN2QwYTAxNmI0NzI2NDZkMTM1MzAzNTFlNzFhZWQxYTg2OWRiYTMyNzk3IiwidGFnIjoiIn0%3D')
    yield call(userService.triggerCookie)
}
