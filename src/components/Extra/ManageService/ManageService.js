import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ManageService.css";

const ManageService = ({ service }) => {
    function deleteEvent(id) {
        fetch(`https://afternoon-basin-49374.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => console.log("deleted successfully", result));
    }
    return (
        <div>
            <div className="">
                <table className="">
                    <tbody>
                        <tr>
                            <td>
                                <h4>{service.serviceName}</h4>
                            </td>

                            <td>
                                <h4>{service.serviceCharge}</h4>
                            </td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;
