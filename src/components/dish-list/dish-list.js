import React from "react";
import DishItem from "./dish-item/dish-item";

import "./dish-list.css";
import DishMainImg from "./dish-main-img/dish-main-img";

const DishList = () => {
  return (
    <div className="dish-main-list">
      <DishItem />
      <DishItem />
      <DishItem />
      <DishItem />
      <DishItem />
      <DishItem />
      <DishItem />
      <DishMainImg />
    </div>
  );
};

export default DishList;
