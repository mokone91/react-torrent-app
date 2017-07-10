import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import {loaderReducer} from "./modules/loader";
import {landingReducer} from "./modules/landing";

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  loader: loaderReducer,
  landing: landingReducer,
});
