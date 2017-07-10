import React, {PureComponent} from "react";
import {getMedia} from "./utils/webtorrent";
import PropTypes from "prop-types";

const propTypes = {
  magnetUrl: PropTypes.string
};

const defaultProps = {
  magnetUrl: ""
};

class Player extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {magnetUrl} = this.props;
    magnetUrl ? getMedia(magnetUrl) : null;
  }

  componentWillReceiveProps(nextProps) {
    const {magnetUrl} = nextProps;
    magnetUrl ? getMedia(magnetUrl) : null;
  }

  render() {
    return (
      <div id="player"/>
    );
  }
}

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;

export default Player;


