import { combineReducers } from "redux";
import authorization from "./authorization";
import someReducer from "./some-reducer";

export default combineReducers({
  authorization,
  someReducer
});
