import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import {loaderReducer} from "./modules/loader";

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  loader: loaderReducer,
});