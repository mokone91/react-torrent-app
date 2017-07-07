import React from "react";
import PropTypes from "prop-types";
import Meta from "../../../components/Meta";

const propTypes = {
  location: PropTypes.object.isRequired
};

function NoMatch({location}) {
  return(
    <Meta title={"404"}>
      <h1>{"404"}</h1>
      <h3>{"No match for"}<code>{location.pathname}</code></h3>
    </Meta>
  );
}

NoMatch.propTypes = propTypes;

export default NoMatch;