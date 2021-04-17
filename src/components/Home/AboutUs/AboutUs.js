import React from "react";
import aboutUs from "../../../images/aboutus.png";
import worker from "../../../images/construction-worker.svg";
import employee from "../../../images/employee.svg";
import car from "../../../images/car.svg";
import diagram from "../../../images/diagram.svg";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div>
            <div className="row mt-5 mb-5">
                <div className="col-md-5">
                    <img className="w-100" src={aboutUs} alt="" />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div className=" ">
                        <h5>About Our Company</h5>
                        <h1>HoW Can We Help You</h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined
                            chunks as necessary.
                        </p>
                        <button className="main-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center justify-content-center text-center technichians">
                        <div>
                            <img className="images" src={worker} alt="" />
                            <h3 className="bottom-bar">300+</h3>
                            <h4 className="text-secondary">Exper technichians</h4>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center text-center client">
                        <div>
                            <img className="images" src={employee} alt="" />
                            <h3 className="bottom-bar">1029+</h3>
                            <h4 className="text-secondary">Satisfied Client</h4>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center text-center experience">
                        <div>
                            <img className="images" src={diagram} alt="" />
                            <h3 className="bottom-bar">18+</h3>
                            <h4 className="text-secondary">Years Experience</h4>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center text-center complete">
                        <div>
                            <img className="images" src={car} alt="" />
                            <h3 className="bottom-bar">1199+</h3>
                            <h4 className="text-secondary">Compleate Project</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
