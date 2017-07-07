import React from "react";
import PropTypes from "prop-types";
import {map, isFunction, includes} from "lodash";
import Button from "../Button";
import {connect} from "react-redux";

const propTypes = {
  data: PropTypes.object.isRequired,
  mapping: PropTypes.array.isRequired,
  loader: PropTypes.array.isRequired,
  actions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool
  ])
};

const defaultProps = {
  actions: false
};

function DataTableRow({data, mapping, loader, actions}) {
  const transformedActions = isFunction(actions) ? actions(data) : actions;
  return (
    <tr className="result">
      {map(mapping, (item, index) => {
        let value = "";
        let columnClass = "";
        if (item.key) {
          columnClass = item.key.toLowerCase();
          value = data[item.key];
          if (item.filter) {
            value = item.filter(value, data);
          }
        } else if (item.filter) {
          columnClass = item.columnClass ? item.columnClass : "";
          value = item.filter(data);
        }

        return (
          <td
            key={index}
            className={columnClass}
          >
            {value}
          </td>
        );
      })}
      {transformedActions ?
        <td className="actions text-right">
          <div className="btn-group">
            {map(transformedActions, (action, index) =>
              action.hidden ?
                false
                :
                <Button
                  onClick={() => action.handler && action.handler(data)}
                  key={index}
                  className={`btn  ${action.className ? action.className : ""}`}
                  loading={includes(loader, data.id)}
                >
                  {action.label}
                </Button>
            )}
          </div>
        </td>
        : false
      }
    </tr>
  );
};

DataTableRow.propTypes = propTypes;
DataTableRow.defaultProps = defaultProps;

function mapStateToProps(state) {
  const {loader} = state;
  return {loader};
}

export default connect(mapStateToProps)(DataTableRow);
