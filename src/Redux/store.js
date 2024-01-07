import {legacy_createStore } from "redux";
import reducers from "./reducer/CombineReducer";
import { composeWithDevTools } from "redux-devtools-extension";





const store=legacy_createStore(reducers,composeWithDevTools())

export default store