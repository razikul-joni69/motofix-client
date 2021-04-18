import React from "react";
import Appointment from "../../Appointment/Appointment/Appointment";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Employees from "../Employees/Employees";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs />
            <Appointment />
            <FeaturedService></FeaturedService>
            <Employees></Employees>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
