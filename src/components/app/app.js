import React from "react";
import Dishes from "../dishes/dishes";
import Dish from "../dish/dish";
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
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/fridge" element={null} />
        <Route
          path="/dish/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <Dish itemId={id} />;
          }}
        />
      </Routes>
    </div>
  );
};

export default App;
