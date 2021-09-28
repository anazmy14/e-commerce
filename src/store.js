import { createStore, combineReducers } from "redux";
import reducer from "./reducers/filterReducer";
const store = createStore(reducer);
export default store