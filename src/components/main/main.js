import React from "react";
import DishList from "../dish-list";

import "./main.css";

const Main = () => {
  return (
    <div className="main-div-main">
      <div className="main-img">
        <img src="https://s3-alpha-sig.figma.com/img/1fa5/8dd3/ad2935d1760be0c780beb158ef8c465b?Expires=1676246400&Signature=DWV5KAlJn0Hv3wanb4E8lFipxyJLxGJU9j0p5yQuh4FagWLHWwtbpyoSyIa7kFGrZ-2fhYJSIekT7hj~8-RYQ8ePpcfuRT~eNowfaA60Xq~QsbaQkxf8ThFdMa5hYBNeFKBNXliWVoAcaDFa8Tk3VeawGMCT9yt7GgpQlSazgsEWD4EhBpFv44qFJhdkCL1G2mWty5VfbBQ6eZo0n3JFRoocpeWsu72ChQb2wDFrUmbNEI5rxOXDMZ3AjVT2X4aQlq7yqwFs8CBmvS7wS5wBah3ks4f0WP0KT29Al-mOBvyFHuF2v8rwq7960K-m87nhBWDt3Zsq67JmpeJTsnCSBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="imck"></img>
        <div className="main-text">
          <h1>welcome</h1>
          <p>
            Discover delicious inspiration and essential ingredients for <br />
            every meal with our comprehensive recipe and product hub
          </p>
        </div>
      </div>
      <div className="row list-m">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 dish-list-main">
          <h2>Meal of the week</h2>
          <DishList />
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
      </div>
    </div>
  );
};

export default Main;
