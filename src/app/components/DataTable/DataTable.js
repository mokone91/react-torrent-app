import React from "react";
import PropTypes from "prop-types";
import {map} from "lodash";
import Header from "./DataTableHeader";
import Row from "./DataTableRow";

const propTypes = {
  data: PropTypes.object.isRequired,
  mapping: PropTypes.array.isRequired,
  actions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool
  ])
};

const defaultProps = {
  actions: false
};

function DataTable({data, mapping, actions}){
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <Header {...{mapping, actions: actions && actions.length > 0}}/>
        </thead>
        <tbody className="table-hover results">
          {map(data, (row, index) => {
            return (
              <Row
                {...{mapping, actions, data: row}}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;

export default DataTable;
