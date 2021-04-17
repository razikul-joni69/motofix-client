import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
    faCalendar,
    faCog,
    faGripHorizontal,
    faHome,
    faSignOutAlt,
    faUserPlus,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/isDoctor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsDoctor(data));
    }, []);

    return (
        <div
            className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
            style={{ height: "100vh" }}
        >
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {/* {isDoctor && ( */}
                    <div>
                        <li>
                            <Link to="/allPatients" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} />{" "}
                                <span>Appointments</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faUsers} />{" "}
                                <span>Add Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addEmployee" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} />{" "}
                                <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addEmployee" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} />{" "}
                                <span>Add Employee</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageServices" className="text-white">
                                <FontAwesomeIcon icon={faCog} />{" "}
                                <span>Manage Service</span>
                            </Link>
                        </li>
                    </div>
                    
                {/* )} */}
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
