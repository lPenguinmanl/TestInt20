import React, { Component } from "react";

import "./dish-item-dif.css";

export default class ListDif extends Component {
  state = {
    compl: 3,
  };
  render() {
    const { compl } = this.state;

    const a = ["", "", "", "", ""];
    const arr = a.map((el, index) => {
      const clasiks = compl <= index ? "star-none" : "star";
      return <lable className={clasiks}></lable>;
    });

    return <div className="star-div">{arr}</div>;
  }
}
