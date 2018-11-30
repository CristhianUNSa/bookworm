import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="ui container">
    <h1>Home page</h1>
    <Link to="/login">Log in</Link>
  </div>
);

export default HomePage;
