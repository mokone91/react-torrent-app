import React from "react";
import PropTypes from "prop-types";
import {map} from "lodash";
import {ConnectedRouter} from "react-router-redux";
import Switch from "./Switch";
import RouteNode from "./RouteNode";
import history from "../utils/History";

const propTypes = {
  routes: PropTypes.array.isRequired
};

function Router({routes}) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {map(routes, (route, i) => {
          return (
            <RouteNode
              {...route}
              key={i}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = propTypes;

export default Router;