import React from "react";

import "./product-item.css";

const ProdItem = () => {
  return (
    <div className="product-item">
      <div className="product-item-text">
        <img className="product-item-img" src="https://cutt.ly/93oivjZ"></img>
        <h3 className="product-item-name">name</h3>
        <h4 className="product-item-value">value</h4>
      </div>
    </div>
  );
};

export default ProdItem;
