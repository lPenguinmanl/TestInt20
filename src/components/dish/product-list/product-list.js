import React from "react";
import ProdIt from "./product-item";

import "./product-list.css";

const ProdLi = () => {
  return (
    <div className="row align-items-start">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <ProdIt />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <ProdIt />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <ProdIt />
      </div>
    </div>
  );
};

export default ProdLi;
