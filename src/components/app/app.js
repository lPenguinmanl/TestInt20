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
      <footer>
        <p>hyeta</p>
      </footer>
    </div>
  );
};

export default App;
