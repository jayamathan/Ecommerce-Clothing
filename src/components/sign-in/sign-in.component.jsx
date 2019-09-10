import "./sign-in.style.scss";
import React, { Component } from "react";

import Custombutton from "./../../custom-buttom/custom-buttom.component";
import Forminput from "./../form-input/form-input.component";
class Signin extends Component {
  state = { email: "", password: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Forminput
            name="Password"
            type="Password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <Custombutton type="submit">Sign In</Custombutton>
        </form>
      </div>
    );
  }
}

export default Signin;
