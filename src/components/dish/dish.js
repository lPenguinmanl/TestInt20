import React, { Component } from "react";
import DishImg from "./dish-img/dish-img";
import ProdLi from "./product-list";
import DishRecipe from "./dish-recipe";
import DishItem from "../dish-list/dish-item/dish-item";

import "./dish.css";

export default class Dish extends Component {
  render() {
    return (
      <div className="main-dish">
        <div className="dish">
          <div className="dish-name">
            <h3>Dish Name</h3>
          </div>
          <div className="dish-content">
            <DishImg />
            <ProdLi />
          </div>
          <DishRecipe />
          <h3 className="try-it">Also try it:</h3>
          <div className="dish-try-it">
            <DishItem />
            <DishItem />
            <DishItem />
            <DishItem />
          </div>
        </div>
        <div className="background-dish"> .</div>
      </div>
    );
  }
}
