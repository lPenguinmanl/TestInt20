import React from "react";

import "./ostend-filter.css";

const OstendFilter = ({ onOstendFilter }) => {
  return (
    <div className="ostend-filter-div">
      <button
        className="ostend-filter-button active"
        onClick={() => onOstendFilter(false)}
      >
        <p>all</p>
      </button>
      <button
        className="ostend-filter-button"
        onClick={() => onOstendFilter(true)}
      >
        <p>can cook</p>
      </button>
    </div>
  );
};
export default OstendFilter;
