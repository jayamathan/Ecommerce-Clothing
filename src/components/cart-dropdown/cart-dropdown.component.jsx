import React, { Component } from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-buttom/custom-buttom.component";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
