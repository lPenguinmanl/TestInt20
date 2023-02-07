import React from "react";
import DishList from "../dish-list";
import ComplFilter from "./complexity-filter";
import OstendFilter from "./ostend-filter/ostend-filter";

import "./dishes.css";

const Dishes = () => {
  return (
    <div className="dishes">
      <div className="dishes-div-img-text">
        <img
          className="dishes-img"
          src="https://cutt.ly/B3rdxyf"
          alt="Dish Name"
        ></img>
        <h1 className="dishes-text">Dishes</h1>
      </div>
      <div className="row dishes-dishlist-row">
        <div className="col-0 col-sm-1 col-md-1 col-lg-1"></div>
        <div className="col-12 col-sm-10 col-md-10 col-lg-10 dishes-dishlist-col">
          <div className="grid text-center filter">
            <div className="g-col-12 g-col-sm-12 g-col-md-6 g-col-lg-6 filter-ostend">
              <h2>Ostend:</h2>
              <OstendFilter />
            </div>
            <div className="g-col-12 g-col-sm-12 g-col-md-6 g-col-lg-6 filter-complexity">
              <h2>Complexity:</h2>
              <ComplFilter />
            </div>
          </div>
          <DishList />
        </div>
        <div className="col-0 col-sm-1 col-md-1 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Dishes;
