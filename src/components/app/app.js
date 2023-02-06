import React from "react";
import Dish from "../dish/dish";
<<<<<<< HEAD
import Dishes from "../dishes/dishes";
=======
import DishList from "../dish-list";
>>>>>>> 66d684bcd0d17585a0dd4f216f15300bcfa98e99
import Header from "../header";
import Main from "../main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
<<<<<<< HEAD
      <Dishes />
=======
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dishes" element={<DishList />} />
        <Route path="/fridge" element={null} />
      </Routes>
      <footer>
        <p>hyeta</p>
      </footer>
>>>>>>> 66d684bcd0d17585a0dd4f216f15300bcfa98e99
    </div>
  );
};

export default App;
