import React, { Component } from "react";

import "./dish-recipe.css";

export default class DishRecipe extends Component {
  render() {
    return (
      <div className="dishrecipe">
        <h3 className="htext">рецепт</h3>
        <span className="rectext">Тут повинен бути рецепт</span>
      </div>
    );
  }
}
