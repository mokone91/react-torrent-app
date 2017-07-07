import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {includes} from "lodash";
import Meta from "components/Meta";
import Favicon from "components/Favicon";
import {PageLoader} from "./modules/loader";
import Alert from "react-s-alert";
import "./rootStyle.less";

const propTypes = {
  children: PropTypes.object.isRequired,
  me: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const defaultProps = {
  loading: false
};

class RootContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const {children, loading} = this.props;
    return (
      <Meta>
        <Favicon/>
        <PageLoader loading={loading}/>
        {children}
        <Alert/>
      </Meta>
    );
  }
}

RootContainer.propTypes = propTypes;
RootContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
  const {loader} = state;
  const loading = includes(loader, "page");
  return {loading};
}

export default connect(mapStateToProps)(RootContainer);