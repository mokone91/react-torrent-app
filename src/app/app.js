import React from "react";
import {Provider} from "react-redux";
import createAppStore from "./store";
import Router from "components/router";
import routes from "./rootRoutes";
const store = createAppStore();


function App() {
  return (
    <Provider store={store}>
      <Router routes={routes}/>
    </Provider>
  );
}
export default App;
