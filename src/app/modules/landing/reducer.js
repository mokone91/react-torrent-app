import * as landingActionTypes from "./actions";

const initialState = {
  magnetUrl: ""
};

function landing(state = initialState, action) {
  switch (action.type) {
    case landingActionTypes.SUBMIT_MAGNET: {
      return {
        ...state,
        magnetUrl: action.payload.magnetUrl
      };
    }
    default:
      return state;
  }
}

export default landing;




