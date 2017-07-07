import React from "react";
import PropTypes from "prop-types";
import {Route as DomRoute} from "react-router-dom";
import Meta from "components/Meta";

const propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
  meta: PropTypes.shape({
    title: PropTypes.string
  }),
};

const defaultProps = {
  exact: true,
  path: null,
  meta: null,
};

function Route({component, meta, ...props}) {
  let Component = component;

  return (
    <DomRoute
      {...props}
      render={(renderProps) => {
        return (
          <Meta {...meta} >
            <Component {...renderProps}/>
          </Meta>
        );
      }}
    />
  );
}

Route.propTypes = propTypes;
Route.defaultProps = defaultProps;

export default Route;