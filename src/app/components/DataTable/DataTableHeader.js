import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  mapping: PropTypes.array.isRequired,
  actions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
};

const defaultProps = {
  actions: []
};

function DataTableHeader({mapping, actions = false}) {
  return (
    <tr>
      {mapping.map((item) => {
        return (
          <th key={item.label}>
            {item.label}
          </th>
        );
      })}
      {actions ?
        <th
          key="actions"
          className="text-right"
          style={{minWidth: "200px"}}
        >
          {"Actions"}
        </th>
        : false
      }
    </tr>
  );
};

DataTableHeader.propTypes = propTypes;
DataTableHeader.defaultProps = defaultProps;

export default DataTableHeader;
