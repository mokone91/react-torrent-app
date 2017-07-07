import React from "react";
import PropTypes from "prop-types";
import "./NavItem.less";

const propTypes = {
  children: PropTypes.object.isRequired
};

function NavItem({children}) {
  return (
    <li className="navItem">
      {children}
    </li>
  );
}

NavItem.propTypes = propTypes;

export default NavItem;