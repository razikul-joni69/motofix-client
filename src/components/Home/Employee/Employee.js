import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Nav } from "react-bootstrap";
import './Employee.css';

const Employee = ({ employee }) => {
    return (
        <div className="col-md-4 col-sm-6 text-center mb-3">
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    className="card-img"
                    style={{ height: "22rem" }}
                    variant="top"
                    src={`data:image/png;base64,${employee.image.img}`}
                />
                <Card.Body>
                    <Card.Title>{employee.name}</Card.Title>
                    <Card.Text>
                        <Nav.Link>
                            {" "}
                            <FontAwesomeIcon
                                className="text-primary"
                                icon={faPhoneAlt}
                            />{" "}
                            {employee.phone}
                        </Nav.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Employee;
