import React from "react";
import PropTypes from "prop-types";
import LaddaButton, {SLIDE_UP} from "react-ladda";

import "./Button.less";

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string
};

const defaultProps = {
  type: "primary"
};

function Button({children, type, ...props}) {
  return (
    <LaddaButton
      data-style={SLIDE_UP}
      style={{textOverflow: "ellipsis"}}
      className={`btn btn-${type}`}
      {...props}
    >
      {children}
    </LaddaButton>
  );
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;