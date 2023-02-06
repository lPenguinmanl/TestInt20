import React from "react";
import DishList from "../dish-list";

import "./dishes.css";

const Dishes = () => {
  return (
    <div className="dishes">
      <div className="dishes-div-img-text">
        <img className="dishes-img" src="https://cutt.ly/B3rdxyf"></img>
        <h1 className="dishes-text">Dishes</h1>
      </div>

      <div>
        <DishList />
      </div>
    </div>
  );
};

export default Dishes;
