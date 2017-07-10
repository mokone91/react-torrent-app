import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from "prop-types";
import Button from "components/Button";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

function Magnet(props) {
  const {handleSubmit, reset, submitting} = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form-inline"
    >
      <div className="form-group">
        <label>
          {"Magnet url"}
        </label>
        <Field
          name="magnetUrl"
          component="input"
          type="text"
          className="form-control"
          placeholder="magnet url"
        />
      </div>
      <Button
        type="default"
        disabled={submitting}
        onClick={handleSubmit}
      >
        {"Submit"}
      </Button>
      <Button
        type="danger"
        disabled={submitting}
        onClick={reset}
      >
        {"Clear Values"}
      </Button>
    </form>
  );
}

Magnet.propTypes = propTypes;

export default reduxForm({
  form: "magnet",
  initialValues: {
    magnetUrl: "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
  }
})(Magnet);
