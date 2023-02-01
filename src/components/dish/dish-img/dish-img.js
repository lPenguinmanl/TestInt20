import React from "react";

import "./dish-img.css";

const DishImg = () => {
  return (
    <div className="dishimg">
      <span>Назва страви</span>
      <img
        src="#"
        // src={`https://www.themealdb.com/images/ingredients/${ingredient_name}.png`}
        alt="Error"
      />
    </div>
  );
};

export default DishImg;
