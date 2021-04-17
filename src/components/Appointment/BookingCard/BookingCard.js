import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BookingCard = ({ service, date }) => {
    const history = useHistory();
    const handleBuy = (id) => {
        history.push(`/checkout/${id}`);
    };

    return (
        <div className="col-md-4 col-sm-6 text-center mb-3 ">
            <Card style={{ width: "18rem" }}>
                <div className="d-flex justify-content-center mt-3">
                    <Card.Img
                        className="card-img text-center"
                        style={{ height: "64px", width: "64px" }}
                        variant="top"
                        src={`data:image/png;base64,${service.image.img}`}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{service.serviceName}</Card.Title>
                    <Card.Text>${service.serviceCharge}</Card.Text>
                    <Card.Text className="text-secondary">
                        {service.serviceInfo}
                    </Card.Text>
                    <button
                        onClick={() => handleBuy(service._id)}
                        className="btn btn-brand text-uppercase"
                    >
                        Book Appointment
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;
