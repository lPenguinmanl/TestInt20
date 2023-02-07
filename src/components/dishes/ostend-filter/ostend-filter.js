import React from "react";

import "./ostend-filter.css";

const OstendFilter = () => {
  return (
    <div className="ostend-filter-div">
      <button className="ostend-filter-button active">
        <p>all</p>
      </button>
      <button className="ostend-filter-button">
        <p>can cook</p>
      </button>
    </div>
  );
};
export default OstendFilter;
