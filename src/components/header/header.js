import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="row header">
      <div className="col-2"></div>
      <div className="col-1">
        <p>Main</p>
      </div>
      <div className="col-1">
        <p>Dishes</p>
      </div>
      <div className="col-1">
        <p>My products</p>
      </div>
      <div className="col-1"></div>
      <div className="col-4">
        <input type="search"></input>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default Header;
