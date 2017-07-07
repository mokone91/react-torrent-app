import React from "react";
import {Link} from "react-router-dom";

import "./Logo.less";


function Logo() {

  return (
    <div className="logo logo_brand pull-left">
      <Link
        to={"/"}
        className="link"
      >
        <img
          src={"url_to_logo_here"}
          className="img-responsive"
        />
        <div className="text">
          {"text_for_logo_here"}
        </div>
        <div className="clearfix"/>
      </Link>
    </div>
  );
}

export default Logo;
