import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {history} from "components/router";
import {request} from "./middlewares";
import config from "./config";

const composeWithEnv = config.app_env === "production" ? compose : composeWithDevTools;

function createAppStore() {
  return createStore(rootReducer, composeWithEnv(
    applyMiddleware(request, thunk, routerMiddleware(history)),
  ));
}

export default createAppStore;