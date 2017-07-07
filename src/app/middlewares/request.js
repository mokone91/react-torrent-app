import axiosMiddleware from "redux-axios-middleware";
import axios from "axios";
import config from "../config";

function request() {
  const client = axios.create({
    baseURL: `${config.apiUrl}:${config.apiPort}`,
    responseType: "json",
    withCredentials: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const clientOptions = {
    returnRejectedPromiseOnError: true,
    successSuffix: "_SUCCESS",
    errorSuffix: "_FAILED",
  };
  return axiosMiddleware(client, clientOptions);
}
export default request();