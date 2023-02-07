import React, { Component } from "react";
import MealService from "../../services/service-new";
import { withData } from "../hoc-helpers";
import MyProdFilter from "./my-product-filter/my-product-filter";
import ProdItem from "./product-item";
import MapProd from "./map-product/map-product";

import "./my-product.css";

class MyProd extends Component {
  state = {
    filter: "Any",
  };
  onSetFilter = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data } = this.props;
    const elements = data.map((item) => {
      const { ingredient_id, ...itemProps } = item;
      return (
        <li key={ingredient_id} className="dish-main-list-item">
          <ProdItem filter={this.state.filter} {...itemProps} />
        </li>
      );
    });

    return (
      <div className="my-product-div">
        <div className="my-product-div-img-text">
          <img
            className="my-product-img"
            src="https://cutt.ly/z3uXXsZ"
            alt="My Product"
          ></img>
          <h1 className="my-product-text">Product</h1>
        </div>
        <div className="filter-product">
          <MyProdFilter onSetFilter={this.onSetFilter} />
        </div>
        <div className="my-product-list">{elements}</div>
        <MapProd />
      </div>
    );
  }
}
const { getIngredient } = new MealService();
export default withData(MyProd, getIngredient);
