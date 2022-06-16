import {applyMiddleware, combineReducers, createStore} from "redux";
import {RegionReducer} from "./reducers/region-reducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    region: RegionReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store