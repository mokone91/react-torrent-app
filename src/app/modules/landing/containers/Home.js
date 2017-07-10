import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Player from "../../../components/Player";
import Magnet from "../forms/Magnet";
import {submitMagnet} from "../actions";

const propTypes = {
  submitMagnet: PropTypes.func.isRequired,
  magnetUrl: PropTypes.string,
};

const defaultProps = {
  magnetUrl: ""
};

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const {submitMagnet, magnetUrl} = this.props;
    return (
      <div>
        <Magnet
          handleSubmit={submitMagnet}
        />
        <Player
          magnetUrl={magnetUrl}
        />
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {magnetUrl: state.landing.magnetUrl};
}

export default connect(mapStateToProps,{submitMagnet})(Home);
