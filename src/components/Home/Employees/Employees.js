import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Employee from "../Employee/Employee";
import "./Employees.css";

const Employees = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        fetch("https://powerful-basin-68172.herokuapp.com/employee")
            .then((res) => res.json())
            .then((data) => setEmployee(data));
    }, []);

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center info-text mt-5 mb-3">
                    Meet Our Employees
                </h5>
                <h1 className="text-center mb-3">Our Awsome Team</h1>
                {employee.length === 0 && (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="grow" variant="warning" size="lg" />
                    </div>
                )}
                <div className="row">
                    {employee.map((employee) => (
                        <Employee key={employee._id} employee={employee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Employees;
