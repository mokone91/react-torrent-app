import {startLoader, stopLoader} from "../loader";

export const SUBMIT_MAGNET = "SUBMIT_MAGNET";

export function submitMagnet() {
  return function (dispatch, getState) {
    const {form: {["magnet"]: {values}}} = getState();
    dispatch(startLoader("page"));
    dispatch({
      type: SUBMIT_MAGNET,
      payload: {...values}
    });
    return dispatch(stopLoader("page"));
  };
}
