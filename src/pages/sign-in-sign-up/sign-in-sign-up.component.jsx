import React from "react";
import "./sign-in-sign-up.style.scss";

import Signin from "./../../components/sign-in/sign-in.component";
import Signup from "./../../components/sign-up/sign-up.component";

const SignInsignup = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);
export default SignInsignup;
