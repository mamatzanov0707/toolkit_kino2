import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoDark from "./Reducers/Slice";

const rootReducer = combineReducers({
    todoDark,
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export type rootState =ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']