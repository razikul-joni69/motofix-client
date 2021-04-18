import {
    faFacebookF,
    faGooglePlusG,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = () => {
    const noNamed = [
        { name: "Motofix", link: "/" },
        { name: "About Motofix", link: "/" },
        { name: "We want your safety", link: "/" },
    ];
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },
    ];
    const oralHealth = [
        { name: "Services", link: "/" },
        { name: "Happy customar", link: "/c" },
        { name: "Year Experience", link: "/" },
        { name: "Fininish Services", link: "/" },
        { name: "Public Review", link: "/" },
        { name: "Write a Review", link: "/" },
    ];
    const services = [
        { name: "About ", link: "/" },
        { name: "Service", link: "/" },
        { name: "Single Service", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Blog List", link: "/" },
        { name: "Testimonial", link: "/" },
    ];
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol
                        key={1}
                        menuTitle={"Motofix"}
                        menuItems={noNamed}
                    />
                    <FooterCol
                        key={2}
                        menuTitle="Services"
                        menuItems={services}
                    />
                    <FooterCol
                        key={3}
                        menuTitle="Oral Achivements"
                        menuItems={oralHealth}
                    />
                    <FooterCol
                        key={4}
                        menuTitle="Our Address"
                        menuItems={ourAddress}
                    >
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon
                                        className="icon active-icon"
                                        icon={faFacebookF}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faGooglePlusG}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faInstagram}
                                    />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">
                                +2025550295
                            </button>
                        </div>
                    </FooterCol>
                </div>
                <hr />
                <div className="copyRight text-center pb-2">
                    <p>
                        Copyright {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
