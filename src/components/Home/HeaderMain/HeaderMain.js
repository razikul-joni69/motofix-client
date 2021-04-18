import React from "react";
import { Link } from "react-router-dom";
import carService from "../../../images/car service.jpg";

const HeaderMain = () => {
    return (
        <main
            style={{ height: "600px" }}
            className="row d-flex align-items-center"
        >
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>
                    We Ensure Your Safe& <br /> Happy Journey
                </h1>
                <p className="text-secondary">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                </p>
                <Link to="/appointment" className="btn main-btn">
                    Contact Us
                </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={carService} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
