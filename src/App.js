import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import AllAppointments from "./components/AllAppointments/AllAppointments/AllAppointments";
import Appointment from "./components/Appointment/Appointment/Appointment";
import CheckOut from "./components/Dashboard/CheckOut/CheckOut";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import Services from "./components/Dashboard/Services/Services";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/appointment">
                        <Appointment></Appointment>
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <PrivateRoute path="/addService">
                        <Services></Services>
                    </PrivateRoute>
                    <Route path="/manageServices">
                        <ManageServices />
                    </Route>
                    <PrivateRoute path="/checkout/:id">
                        <CheckOut></CheckOut>
                    </PrivateRoute>
                    <PrivateRoute path="/allAppointments">
                        <AllAppointments></AllAppointments>
                    </PrivateRoute>
                    <PrivateRoute path="/addEmployee">
                        <AddEmployee></AddEmployee>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
