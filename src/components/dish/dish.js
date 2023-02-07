import React, { Component } from "react";
import DishImg from "./dish-img/dish-img";
import ProdLi from "./product-list";
import DishRecipe from "./dish-recipe";
import DishList from "../dish-list";
import MealService from "../../services/service-new";

import "./dish.css";

export default class Dish extends Component {
  mealService = new MealService();
  state = {
    data: null,
  };
  componentDidMount() {
    this.onLoad();
  }
  onLoad = () => {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.mealService.getMealById(itemId).then((data) => {
      this.setState({ data });
    });
  };
  render() {
    const { meal_name } = this.state.data;
    return (
      <div className="main-dish">
        <div className="dish">
          <div className="dish-name">
            <h3>{meal_name}</h3>
          </div>
          <div className="dish-content">
            <DishImg />
            <ProdLi />
          </div>
          <DishRecipe />
          <h3 className="try-it">Also try it:</h3>
          <div className="dish-try-it">
            <DishList num={3} />
          </div>
        </div>
        <div className="background-dish"> .</div>
      </div>
    );
  }
}
