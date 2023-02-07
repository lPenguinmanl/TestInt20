import React, { Component } from "react";
import MealService from "../../../services/service-new";

import "./add-button.css";

const AddButton = () => {
  return (
    <div className="add-button">
      <h3 className="add-button-text">Add Product On Your Freezer</h3>
      <div className="add-button-group">
        <div className="add-button-group-div">
          <h3 className="add-button-text-h">Product:</h3>
          <input
            className="add-button-input"
            type="text"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
        </div>

        <div className="add-button-group-div">
          <h3 className="add-button-text-h">Value:</h3>
          <input
            className="add-button-input"
            type="number"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
        </div>

        <div className="add-button-group-div">
          <h3 className="add-button-text-h">Expiration date:</h3>
          <input
            className="add-button-input"
            type="date"
            id="name-product"
            name="name-product"
            placeholder="Print product"
          ></input>
        </div>
        <div className="add-button-group-div">
          <button className="add-button-but">
            <span>To Add</span>
          </button>
          <button className="add-button-remove">
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddButton;
