import React, { Component } from "react";
import Dishes from "../dishes/dishes";
import Dish from "../dish/dish";
import Header from "../header";
import Main from "../main";
import { Routes, Route } from "react-router-dom";
import {
  MealServiceProvider,
  MealServiceConsumer,
} from "../swapi-service-context/swapi-service-context";
import "./app.css";
import ErrorBoundry from "../error-boundry/error-boundry";
import MealService from "../../services/dummy-service";

export class App extends Component {
  mealService = new MealService();

  render() {
    return (
      <ErrorBoundry>
        <MealServiceProvider value={this.mealService}>
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
        </MealServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
