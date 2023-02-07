import React from "react";
import ListDif from "../dish-item-dif";
import "./dish-item.css";

const DishItem = ({ meal_name, meal_image, difficulty }) => {
  const imageUrl = meal_image ? meal_image : "https://cutt.ly/93rLjy2";
  return (
    <div className="dish-list-item">
      <div className="dish-list-div">
        <img className="dish-list-img" src={imageUrl} alt={meal_name}></img>
        <h4>{meal_name}</h4>
        <ListDif compl={difficulty} />
        <button className="dish-list-button">Review</button>
      </div>
    </div>
  );
};

export default DishItem;
