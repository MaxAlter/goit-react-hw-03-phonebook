import React from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form className={style.formFilter}>
      <label className={style.formName_label}>Find Contacts by Name</label>
      <input
        className={style.formName_input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Type to filter contacts..."
        autoComplete="off"
      />
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
export default Filter;
