import React from "react";
import MealService from "../../services/dummy-service";
import DishItem from "./dish-item/dish-item";
import DishMainImg from "./dish-main-img/dish-main-img";
import { withData } from "../hoc-helpers";
import "./dish-list.css";

const DishList = ({ data }) => {
  const elements = data.map((item) => {
    const { meal_id, ...itemProps } = item;
    return (
      <li key={meal_id} className="dish-main-list-item">
        <DishItem {...itemProps} />
      </li>
    );
  });
  return (
    <div className="dish-main-list">
      {elements}
      <DishMainImg />
    </div>
  );
};
const { getAllDishes } = new MealService();
export default withData(DishList, getAllDishes);
