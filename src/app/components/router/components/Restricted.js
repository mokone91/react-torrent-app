import React from "react";
import PropTypes from "prop-types";
import Meta from "../../../components/Meta";

const propTypes = {
  location: PropTypes.object.isRequired
};

function Restricted({location}) {
  return(
    <Meta title={"403"}>
      <h1>{"403"}</h1>
      <h3>{"Access deny for"}<code>{location.pathname}</code></h3>
    </Meta>
  );
}

Restricted.propTypes = propTypes;

export default Restricted;