import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

const defaultProps = {
  children: null,
  title: "Page Title",
  description: "page description",
  keywords: "page keywords"

};


function Meta({children, title, description, keywords}) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`${description}`}
        />
        <meta
          name="keywords"
          content={`${keywords}`}
        />
      </Helmet>
      {children}
    </div>
  );
}

Meta.propTypes = propTypes;
Meta.defaultProps = defaultProps;

export default Meta;