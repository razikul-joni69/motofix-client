import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import CardForm from "../CardForm/CardForm";
import Sidebar from "../Sidebar/Sidebar";

const stripePromise = loadStripe(
    "pk_test_51IeGOoDCHxSqg8XIw1yOmkMUGDNCTSfoWoMkaGlygth8fvAZ4VEZpKB7A5o3XeIKmqlyvKQ6FEljddt5IBHgLk0r00jTswIm0a"
);

const CheckOut = () => {
    const { id } = useParams("");
    const [selectedProduct, setSelectedProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5000/service/" + id)
            .then((response) => response.json())
            .then((data) => setSelectedProduct(data));
    }, [id]);
    console.log(loggedInUser);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = () => {
        // const formData = new FormData();
        // console.log(info);
        // formData.append("file", file);
        // formData.append("name", info.name);
        // formData.append("email", info.email);
        // formData.append("phone", info.phone);
        // fetch("http://localhost:5000/addEmployee", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    };

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
                <h2>This is checkOut{selectedProduct.serviceName}</h2>
                <h5 className="text-brand">Add an Employees</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Your Name</label>
                        <input
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
                            name="name"
                            defaultValue={loggedInUser.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            onBlur={handleBlur}
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            onBlur={handleBlur}
                            type="number"
                            className="form-control"
                            name="phone"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="form-control">
                        <Elements stripe={stripePromise}>
                            <CardForm />
                        </Elements>
                    </div>

                    <button type="submit" className="main-btn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CheckOut;
