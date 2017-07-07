import React, {PureComponent} from "react";
import {connect} from "react-redux";
import "./Footer.less";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <footer className="footer">
        {"footer_text_here"}
      </footer>
    );
  }
}

export default connect()(Footer);

