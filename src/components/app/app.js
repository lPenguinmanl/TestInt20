import React from "react";
import Dish from "../dish/dish";
import Header from "../header";
import Main from "../main";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <div className="row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8"></div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
      </div>
    </div>
  );
};

export default App;
