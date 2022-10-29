import { combineReducers } from "redux";
import bills from "./actionReducer";

const rootReducer = combineReducers({
    bills
});

export default rootReducer;
