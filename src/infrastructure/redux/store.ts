import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import {rootReducer, RootType} from './rootReducer'
import rootWatcher from "./watcher";


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore<RootType>({ reducer:rootReducer, middleware: [sagaMiddleware], devTools: true })
store.sagaTask = sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
