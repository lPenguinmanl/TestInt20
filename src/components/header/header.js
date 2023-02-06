import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-0 col-md-1 col-lg-2"></div>
        <div className="col-2 col-md-2 col-lg-1 dovboyob">
          <a className="hrefmain">Main</a>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <a className="hrefdish">Dishes</a>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <a className="hrefprod">My products</a>
        </div>
        <div className="col-2 col-md-1 col-lg-1">
          <button onClick={AlertClick} className="butadd">
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

const AlertClick = () => {
  alert(
    <form>
      <p>Add Form</p>
    </form>
  );
};
