import { combineReducers } from "redux";
import listsReducer from "./lists.reducer";

const rootReducer = combineReducers({lists: listsReducer});

export default rootReducer;