import React from "react";
import PropTypes from "prop-types";
import {NavLink as Link} from "react-router-dom";

import "./NavLink.less";

const propTypes = {
  children: PropTypes.string.isRequired
};

function NavLink({children, ...props}) {
  return (
    <Link
      className="navLink"
      activeClassName="active"
      {...props}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = propTypes;

export default NavLink;