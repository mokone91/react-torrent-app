import React from "react";
import PropTypes from "prop-types";
import {Navbar, Nav} from "react-bootstrap";
import AutoAffix from "react-overlays/lib/AutoAffix";
import Logo from "../Logo";
import "./NavBar.less";


const propTypes = {
  children: PropTypes.array.isRequired,
  collapse: PropTypes.bool,
  sticky: PropTypes.bool
};

const defaultProps = {
  collapse: true,
  sticky: false
};

function NavBar({children, collapse, sticky}) {
  const navBar = (
    <Navbar
      fluid
      style={{zIndex: 2}}
    >
      <div className="row">
        <Navbar.Header
          style={Object.assign({}, {paddingLeft: "15px"}, collapse ? {} : {float: "left"})}
        >
          <Logo/>
          {collapse &&
          <Navbar.Toggle />
          }
        </Navbar.Header>
        {collapse ?
          <Navbar.Collapse>
            <Nav pullRight>
              {children}
            </Nav>
          </Navbar.Collapse>
          :
          <Nav
            pullRight
            className="pull-right"
          >
            {children}
          </Nav>
        }
      </div>
    </Navbar>
  );

  if (sticky) {
    return (
      <AutoAffix>
        {navBar}
      </AutoAffix>
    );
  }
  else {
    return navBar;
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;