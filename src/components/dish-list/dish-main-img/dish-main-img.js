import React from "react";

import "./dish-main-img.css";

const DishMainImg = () => {
  return (
    <button className="dish-main-img-button">
      <div className="dish-main-img-div"></div>
      <p className="dish-main-img-p">
        View <br /> all <br /> dishes
      </p>
    </button>
  );
};

export default DishMainImg;
