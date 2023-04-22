import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "../modules/user/userReducer";

export const rootReducer = combineReducers({
    user:userReducer
})
export type RootType = ReturnType<typeof rootReducer>
