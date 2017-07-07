import React from "react";
import {NavBar, NavItem, NavLink} from "components/NavBar";
import {withRouter} from "react-router";

function Header() {
  return (
    <header>
      <NavBar>
        <NavItem>
          <NavLink to="/test">
            {"test"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/advertisers">
            {"advertisers"}
          </NavLink>
        </NavItem>
      </NavBar>
    </header>
  );
}

export default withRouter(Header);