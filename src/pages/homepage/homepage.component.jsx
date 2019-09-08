import React from "react";
import { Switch, Route } from "react-router-dom";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
