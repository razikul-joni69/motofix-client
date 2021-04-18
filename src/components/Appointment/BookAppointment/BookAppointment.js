import React from "react";
import { Spinner } from "react-bootstrap";
import BookingCard from "../BookingCard/BookingCard";

const BookAppointment = ({ date }) => {
    const [services, setServices] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <section className="container">
            <h2 className="text-center text-brand mb-5">
                Available Services on {date.toDateString()}
            </h2>
            {services.length === 0 && (
                <div className="d-flex justify-content-center pb-5">
                    <Spinner animation="grow" variant="warning" size="lg" />
                </div>
            )}
            <div className="row">
                {services.map((service) => (
                    <BookingCard
                        service={service}
                        date={date}
                        key={service._id}
                    ></BookingCard>
                ))}
            </div>
        </section>
    );
};

export default BookAppointment;
