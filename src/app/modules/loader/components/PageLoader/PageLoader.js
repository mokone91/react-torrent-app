import React from "react";
import PropTypes from "prop-types";
import Mprogress from "mprogress/mprogress.min";
import classNames from "classnames";
import "mprogress/mprogress.min.css";
import "./PageLoader.less";

const mprogress = new Mprogress();

const propTypes = {
  loading: PropTypes.bool
};

const defaultProps = {
  loading: false
};

function PageLoader({loading}) {
  if (loading) {
    mprogress.start();
    mprogress.set(0.4);
  } else {
    mprogress.end();
  }
  const loaderClassNames = classNames(
    "loader",
    {loading}
  );
  return <div className={loaderClassNames}/>;
}

PageLoader.propTypes = propTypes;
PageLoader.defaultProps = defaultProps;

export default PageLoader;
