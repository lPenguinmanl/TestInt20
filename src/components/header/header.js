import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-0 col-md-1 col-lg-2"></div>
        <div className="col-2 col-md-2 col-lg-1 dovboyob">
          <button className="hrefmain">
            <p>Main</p>
          </button>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <button className="hrefdish">
            <p>Dishes</p>
          </button>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <button className="hrefprod">
            <p>My products</p>
          </button>
        </div>
        <div className="col-2 col-md-1 col-lg-1">
          <button className="butadd">
            <p className="butaddp">Add Dish</p>
          </button>
        </div>
        <div className="col-4 col-md-3 col-lg-4 searchdiv">
          <form className="search">
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="search" placeholder="Start typing.."></input>
          </form>
        </div>
        <div className="col-0 col-md-1 col-lg-2"></div>
      </div>
    );
  }
}
