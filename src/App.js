import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import SignUpPage from "./components/pages/SignUpPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/signup" exact component={SignUpPage} />
  </div>
);
export default App;
