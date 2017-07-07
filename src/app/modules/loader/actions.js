export const START_LOADER = "START_LOADER";

export function startLoader(value) {
  return {
    type: START_LOADER,
    payload: value
  };
}


export const STOP_LOADER = "STOP_LOADER";

export function stopLoader(value) {
  return {
    type: STOP_LOADER,
    payload: value
  };
}
