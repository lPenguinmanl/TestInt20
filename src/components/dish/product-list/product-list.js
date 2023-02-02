import React from "react";
import ProdIt from "./product-item";

import "./product-list.css";

const ProdLi = () => {
  return (
    <div className="prodli">
      <div className="justify-content-center prodlicont">
        <span>Назва страви</span>
      </div>
      <div className="row align-items-start prodlicont">
        <div className="col-sm-12 col-md-6 col-lg-4 licont">
          <ProdIt />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 licont">
          <ProdIt />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 licont">
          <ProdIt />
        </div>
      </div>
    </div>
  );
};

export default ProdLi;
