import React from "react";
import AddButton from "./add-button/add-button";
import MyProdFilter from "./my-product-filter/my-product-filter";

import "./my-product.css";

const MyProd = () => {
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
      <div className="my-product-list"></div>
    </div>
  );
};
export default MyProd;
