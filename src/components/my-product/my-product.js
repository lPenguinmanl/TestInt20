import React from "react";
import AddButton from "./add-button/add-button";
import MyProdFilter from "./my-product-filter/my-product-filter";

import "./my-product.css";

const MyProd = ({ data }) => {
  const elements = data.map((item) => {
    const { ingredient_id, ...itemProps } = item;
    return (
      <li key={ingredient_id} className="dish-main-list-item">
        ads
      </li>
    );
  });

  return (
    <div className="my-product-div">
      <div className="my-product-div-img-text">
        <img
          className="my-product-img"
          src="https://cutt.ly/z3uXXsZ"
          alt="My Product"
        ></img>
        <h1 className="my-product-text">Product</h1>
      </div>
      <div className="filter-product">
        <MyProdFilter />
        <AddButton />
      </div>
      <div className="my-product-list">{elements}</div>
    </div>
  );
};
export default MyProd;
