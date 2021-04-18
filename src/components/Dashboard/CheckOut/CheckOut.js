import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AppointmentForm from "./CheckOut/AppointmentForm/AppointmentForm";

const CheckOut = () => {
    const { id } = useParams("");
    const [selectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/service/" + id)
            .then((response) => response.json())
            .then((data) => setSelectedService(data));
    }, [id]);

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div
                className="col-md-10 p-4 pr-5"
                style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "#F4FDFB",
                }}
            >
                <AppointmentForm
                    selectedService={selectedService}
                ></AppointmentForm>
            </div>
        </section>
    );
};

export default CheckOut;
