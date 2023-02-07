import React, { Component } from "react";
import Dishes from "../dishes/dishes";
import Dish from "../dish/dish";
import Header from "../header";
import Main from "../main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./app.css";
import ErrorBoundry from "../error-boundry/error-boundry";
import MyProd from "../my-product/my-product";

export default class App extends Component {
  // mealService = new MealService();

  render() {
    const DishWraper = () => {
      const { id } = useParams();
      return <Dish itemId={id} />;
    };
    return (
      <ErrorBoundry>
        <BrowserRouter>
          {/* <MealServiceProvider value={this.mealService}> */}
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/dishes" element={<Dishes />} />
              <Route path="/fridge" element={<MyProd />} />
              {/* <Route
                path="/dish"
                element={
                  <ErrorBoundry>
                    <Dish itemId={4} />
                  </ErrorBoundry>
                }
              /> */}
              <Route path="/dish/:id" element={<Dish itemId={4} />} />
            </Routes>
          </div>
          {/* </MealServiceProvider> */}
        </BrowserRouter>
      </ErrorBoundry>
    );
  }
}
