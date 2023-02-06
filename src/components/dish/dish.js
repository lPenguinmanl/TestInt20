import React, { Component } from "react";
import DishImg from "./dish-img/dish-img";
import ProdLi from "./product-list";
import DishRecipe from "./dish-recipe";

import "./dish.css";

export default class Dish extends Component {
  render() {
    return (
      <div className="dish ">
        <DishImg />
        <ProdLi />
        <DishRecipe />
      </div>
    );
  }
}
