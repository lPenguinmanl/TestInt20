import React from "react";
import Dish from "../dish/dish";
import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">
          <Dish />
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
      </div>
    </div>
  );
}

export default App;
