import React from "react";

import "./product-item.css";

const ProdItem = ({
  name,
  stored_amount,
  measure,
  ingredient_image,
  expiry_date,
  category,
  filter,
}) => {
  const currentDate = new Date().toJSON().slice(0, 10);
  const cls = expiry_date >= currentDate ? "expiry-date" : "expiry-date red";
  if (filter !== "Any" && filter !== category) return null;
  return (
    <div className="product-item">
      <div className="product-item-text">
        <img className="product-item-img" src={ingredient_image}></img>
        <h3 className="product-item-name">{name}</h3>
        <h4 className="product-item-value">
          {stored_amount} {measure}
        </h4>
        <span className={cls}>{expiry_date}</span>
      </div>
    </div>
  );
};

export default ProdItem;
