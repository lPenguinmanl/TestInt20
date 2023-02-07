import React, { Component } from "react";
import MealService from "../../../services/service-new";

import "./add-button.css";

export default class AddButton extends Component {
  // mealService = new MealService();
  // updateProduct() {
  //   new_prod = {
  //     name: "string",
  //     image: "string",
  //     category: "Vegetables",
  //     stored_amount: 0,
  //     measure: "pieces",
  //     expiry_date: "2023-02-07",
  //   };
  //   this.mealService.putIngredient(id, new_prod);
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.mealService.putIngredient(id, new_prod);
  // };

  render() {
    return (
      <div className="add-button">
        <h3 className="add-button-text">Add Product On Your Freezer</h3>
        <div className="add-button-group">
          <h3 className="add-button-text-h">Product:</h3>
          <input
            className="add-button-input"
            type="text"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
          <h3 className="add-button-text-h">Value:</h3>
          <input
            className="add-button-input"
            type="number"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
          <h3 className="add-button-text-h">Expiration date:</h3>
          <input
            className="add-button-input"
            type="date"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
          <button className="add-button-but">
            <span>To Add</span>
          </button>
        </div>
      </div>
    );
  }
}
