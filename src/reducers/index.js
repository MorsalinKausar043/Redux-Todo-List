import { combineReducers } from "redux";
import todoReducers from "./todo";

const rootReducers = combineReducers({
  todoReducers,
});

export default rootReducers;
