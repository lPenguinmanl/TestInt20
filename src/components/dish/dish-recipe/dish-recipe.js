import React, { Component } from "react";

import "./dish-recipe.css";

export default class DishRecipe extends Component {
  render() {
    return (
      <div className="dish-recipe-div">
        <h3>Method of cooking:</h3>
        <p className="dish-recipe">
          Boil the chicken fillet in salted water with spices, fry or bake in
          the oven. Cool and cut into small pieces. Boil eggs, cool and clean.
          Cut into slices or cubes. Finely chop the Beijing cabbage. It is not
          necessary to use the hard lower part. Cut cucumbers and tomatoes
          arbitrarily. Mix all the ingredients in a salad bowl, add salt and
          season with mayonnaise mixed with mustard.
        </p>
      </div>
    );
  }
}
