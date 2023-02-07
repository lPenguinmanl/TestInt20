import React from "react";

import "./compl-filter.css";

const ComplFilter = ({ onDifficultyFilter }) => {
  const a = [1, 2, 3, 4, 5];
  const elements = a.map((id) => {
    return (
      <button
        className="star-filter-button"
        onClick={() => onDifficultyFilter(id)}
      >
        <lable className="star-filter"></lable>
      </button>
    );
  });
  return (
    <div class="rating-stars">
      {elements}
      {/* <button className="star-filter-button">
        <lable className="star-filter"></lable>
      </button>
      <button className="star-filter-button">
        <lable className="star-filter"></lable>
      </button>
      <button className="star-filter-button">
        <lable className="star-filter"></lable>
      </button>
      <button className="star-filter-button">
        <lable className="star-filter"></lable>
      </button>
      <button className="star-filter-button">
        <lable className="star-filter"></lable>
      </button> */}
    </div>
  );
};
export default ComplFilter;
