import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <main className=" d-flex justify-content-center pt-5 mb-4">
            <div>
                <h1>Select Date for Servicing</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
        </main>
    );
};

export default AppointmentHeader;
