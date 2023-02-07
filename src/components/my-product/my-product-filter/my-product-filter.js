import React, { Component } from "react";

import "./my-product-filter.css";

export default class MyProdFilter extends Component {
  render() {
    return (
      <div className="my-product-filter">
        <h3 className="my-product-filter-text">Category:</h3>
        <div className="my-product-filter-button-group">
          <button className="my-product-filter-button">
            <p>all category</p>
          </button>
          <button className="my-product-filter-button">
            <p>all category</p>
          </button>
        </div>
      </div>
    );
  }
}
