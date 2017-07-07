import React from "react";
import PropTypes from "prop-types";
import {Switch as DomSwitch} from "react-router";
import {Route} from "react-router-dom";
import NoMatch from "./NoMatch";

const propTypes = {
  children: PropTypes.array
};

const defaultProps = {
  children: null
};

function Switch({children}) {
  return (
    <DomSwitch>
      {children}
      <Route component={NoMatch}/>
    </DomSwitch>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;


export default Switch;