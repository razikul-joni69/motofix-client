import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch("https://powerful-basin-68172.herokuapp.com/appointments")
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, []);

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div
                className="col-md-10 p-4 pr-5"
                style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "#F4FDFB",
                }}
            >
                <h5 className="text-brand">All Appointments</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllAppointments;
