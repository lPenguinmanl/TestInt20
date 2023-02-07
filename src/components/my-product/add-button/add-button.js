import React from "react";

import "./add-button.css";

const AddButton = () => {
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
};
export default AddButton;
