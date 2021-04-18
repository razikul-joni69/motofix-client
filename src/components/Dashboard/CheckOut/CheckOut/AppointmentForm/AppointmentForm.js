import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useForm } from "react-hook-form";
import CardForm from "../../../CardForm/CardForm";

const stripePromise = loadStripe(
    "pk_test_51IeGOoDCHxSqg8XIw1yOmkMUGDNCTSfoWoMkaGlygth8fvAZ4VEZpKB7A5o3XeIKmqlyvKQ6FEljddt5IBHgLk0r00jTswIm0a"
);
const AppointmentForm = ({ selectedService, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        data.service = selectedService.serviceName;
        data.date = date;
        data.created = new Date();

        fetch("http://localhost:5000/addAppointment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert("Appointment created successfully.");
                }
            });
    };

    return (
        <div>
            <h4 className="text-brand">Check This Out</h4>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        type="text"
                        ref={register({ required: true })}
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                    />
                    {errors.name && (
                        <span className="text-danger">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        ref={register({ required: true })}
                        name="phone"
                        placeholder="Phone Number"
                        className="form-control"
                    />
                    {errors.phone && (
                        <span className="text-danger">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        ref={register({ required: true })}
                        name="email"
                        placeholder="Email"
                        className="form-control"
                    />
                    {errors.email && (
                        <span className="text-danger">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <div className="form-control">
                        <Elements
                            className="form-control"
                            name="card"
                            type="text"
                            ref={register({ required: true })}
                            stripe={stripePromise}
                        >
                            <CardForm />
                        </Elements>
                        {errors.email && (
                            <span className="text-danger">
                                <br />
                                This field is required
                            </span>
                        )}
                    </div>
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
