import React from "react";
import Dish from "../dish/dish";
import DishList from "../dish-list";
import Header from "../header";
import Main from "../main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dishes" element={<DishList />} />
        <Route path="/fridge" element={null} />
      </Routes>
      <footer>
        <p>hyeta</p>
      </footer>
    </div>
  );
};

export default App;
