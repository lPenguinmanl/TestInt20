import React from "react";
import Dish from "../dish/dish";
import Dishes from "../dishes/dishes";
import Header from "../header";
import Main from "../main";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dishes />
    </div>
  );
};

export default App;
