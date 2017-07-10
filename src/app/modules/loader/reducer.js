import {pull} from "lodash";
import * as LoaderActionTypes from "./actions";

const initialState = {
  loader: []
};

function loader(state = initialState, action) {
  switch (action.type) {
    case LoaderActionTypes.START_LOADER: {
      return [
        ...state,
        action.payload
      ];
    }
    case LoaderActionTypes.STOP_LOADER: {
      return [...pull(state, action.payload)];
    }
    default:
      return state;
  }
}

export default loader;




