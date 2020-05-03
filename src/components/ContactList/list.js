import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./list.module.css";

const List = ({ name, number, onDeleteList }) => {
  return (
    <Fragment>
      <div className={style.list}>
        {number} : {name}
        <button className={style.button} type="button" onClick={onDeleteList}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired
};

export default List;
