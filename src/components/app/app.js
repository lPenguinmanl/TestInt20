import React, { Component } from "react";
import Dishes from "../dishes/dishes";
import Dish from "../dish/dish";
import Header from "../header";
import Main from "../main";
import ScrollToTop from "../scrol-to-top";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Switch,
} from "react-router-dom";
import "./app.css";
import ErrorBoundry from "../error-boundry/error-boundry";
import MyProd from "../my-product/my-product";

export default class App extends Component {
  // mealService = new MealService();
  state = {
    search: "",
  };
  render() {
    return (
      <ErrorBoundry>
        <BrowserRouter>
          {/* <MealServiceProvider value={this.mealService}> */}
          <div className="app">
            <Header />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/dishes" element={<Dishes />} />
                <Route path="/fridge" element={<MyProd />} />
                <Route path="/dishes/:id" element={<DishWraper />} />
              </Routes>
            </ScrollToTop>
          </div>
          {/* </MealServiceProvider> */}
        </BrowserRouter>
      </ErrorBoundry>
    );
  }
}

const DishWraper = () => {
  const { id } = useParams();
  return <Dish itemId={id} />;
};
