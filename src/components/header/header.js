import React from "react";

import "./header.css";

const Header = () => {
    return (
        <div className="row header pb-1 pt-1">
            <div className="col-sm-0 col-md-1 col-lg-2"></div>
            <div className="col-sm-12 col-md-10 col-lg-8">
                <div className="grid gridHeader">
                    <div class="g-col-3">INT20</div>
                    <dvi className="g-col-3"></dvi>
                    <div class="g-col-3">Home</div>
                    <div class="g-col-3">Meel</div>
                </div>
            </div>
            <div className="col-sm-0 col-md-1 col-lg-2"></div>
        </div>
    )
};

export default Header;