import React from "react";
import ListDif from "../dish-item-dif";
import "./dish-item.css";

const DishItem = () => {
  return (
    <div className="dish-list-item">
      <div className="dish-list-div">
        <img className="dish-list-img" src="https://cutt.ly/93rLjy2"></img>
        <h4>salad</h4>
        <ListDif />
        <button className="dish-list-button">Review</button>
      </div>
    </div>
  );
};

export default DishItem;
