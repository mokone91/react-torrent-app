import React from "react";
import PropTypes from "prop-types";
import Route from "./Route";
import Switch from "./Switch";
import {map} from "lodash";

const propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  path: PropTypes.string,
  authorize: PropTypes.array,
  children: PropTypes.array,
  meta: PropTypes.shape({
    title: PropTypes.string
  }),
};

const defaultProps = {
  component: "div",
  path: null,
  authorize: ["user"],
  children: null,
  meta: null
};

function RouteNode({children, ...props}) {
  if (children) {
    const routes = map(children, (route, i) => {
      return (
        <RouteNode
          {...route}
          path={props.path ? `${props.path}${route.path}` : route.path}
          authorize={route.authorize ? route.authorize : props.authorize}
          key={i}
        />
      );
    });
    return React.createElement(props.component, null, <Switch>{routes}</Switch>);
  }
  return (
    <Route {...props} />
  );
}

RouteNode.propTypes = propTypes;
RouteNode.defaultProps = defaultProps;

export default RouteNode;