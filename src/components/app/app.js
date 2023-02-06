import React from "react";
import Dishes from "../dishes/dishes";
import Header from "../header";
import Main from "../main";
import { Routes, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/fridge" element={null} />
      </Routes>
    </div>
  );
};

export default App;
