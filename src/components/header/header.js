import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="row header">
      <div className="col-sm-0 col-md-1 col-lg-2"></div>
      <div className="col-sm-2 col-md-2 col-lg-1">
        <p>Main</p>
      </div>
      <div className="col-sm-2 col-md-2 col-lg-1">
        <p>Dishes</p>
      </div>
      <div className="col-sm-2 col-md-2 col-lg-1">
        <p>My products</p>
      </div>
      <div className="col-sm-0 col-md-1 col-lg-1"></div>
      <div className="col-sm-5 col-md-3 col-lg-4">
        <input type="search"></input>
      </div>
      <div className="col-sm-0 col-md-1 col-lg-2"></div>
    </div>
  );
};

export default Header;
