import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./AppLayout.less";


const propTypes = {
  children: PropTypes.object.isRequired
};

class Layout extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="layout">
        <Navbar/>
        <content>
          <div className="container-fluid">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </content>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;