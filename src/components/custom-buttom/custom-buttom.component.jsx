import "./custom-buttom.style.scss";
import React from "react";

const Custombutton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default Custombutton;
