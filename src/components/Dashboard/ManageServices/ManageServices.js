// import React from "react";
// import ManageService from "../ManageService/ManageService";
// import Sidebar from "../Sidebar/Sidebar";
// import './ManageServices.css'
// const ManageServices = () => {
//     const [services, setServices] = React.useState([]);
// React.useEffect(() => {
//     fetch("https://powerful-basin-68172.herokuapp.com/services")
//         .then((res) => res.json())
//         .then((data) => setServices(data));
// }, []);
//     return (
//         <div className="row">
//             <div className="col-md-2">
//                 <Sidebar></Sidebar>
//             </div>

//             <div className="col-md-10">
//             <table style={{borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%'}}>
//                 <thead >
//                     <tr>
//                         <th>Service Name</th>
//                         <th>Service Charge</th>
//                     </tr>
//                 </thead>
//             </table>
//                 {services.map((service, index) => (
//                     <ManageService
//                         service={service}
//                         key={service._id}
//                         index={index}
//                     ></ManageService>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ManageServices;

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageServices.css";

const ManageServices = () => {
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        fetch("https://powerful-basin-68172.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);

    function deleteEvent(id) {
        fetch(`https://powerful-basin-68172.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => console.log("deleted successfully", result));
    }

    return (
        <div className="row">
            <div className="col-md-2 ">
                <Sidebar />
            </div>
            <div className="col-md-10 services p-5">
                <table className="h4">
                    <tbody>
                        <tr>
                            <th>Service Name</th>
                            <th>Service Charge</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {services.map((service) => (
                            <tr key={service._id}>
                                <td>{service.serviceName}</td>
                                <td>{service.serviceCharge}</td>
                                <td>
                                    <FontAwesomeIcon
                                        className="edit text-success"
                                        icon={faEdit}
                                    />
                                </td>
                                <td>
                                    <FontAwesomeIcon
                                        onClick={() =>
                                            deleteEvent(`${service._id}`)
                                        }
                                        className="delete text-danger"
                                        icon={faTrashAlt}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;
