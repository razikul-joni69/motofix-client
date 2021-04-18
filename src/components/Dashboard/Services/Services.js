import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Services = () => {
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
        const formData = new FormData();
        formData.append("file", file);
        formData.append("serviceName", info.serviceName);
        formData.append("serviceCharge", info.serviceCharge);
        formData.append("serviceInfo", info.serviceInfo);

        fetch("http://localhost:5000/addService", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
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
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Service Name
                        </label>
                        <input
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
                            name="serviceName"
                            placeholder="Enter service name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Service Charge
                        </label>
                        <input
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
                            name="serviceCharge"
                            placeholder="Enter service cost"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Service Details
                        </label>
                        <textarea
                            onBlur={handleBlur}
                            class="form-control"
                            name="serviceInfo"
                            type="text"
                            placeholder="Enter service Details"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Upload service image
                        </label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Picture"
                        />
                    </div>
                    <button type="submit" className="main-btn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Services;
