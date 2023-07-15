import React, { Component, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { SignUp } from "../../LogReg/SignUp";
import Footer from "../../Components/footer";

import "../../index.css";

export const Register = () => {
  return (
    <div className="mainRegister">
      <h2 className="loginForm">Реєстрація</h2>
      <SignUp />
      <p className="formRedirect">
        Have an account <Link to="/loginPage">Увійти</Link>
      </p>
    </div>
  );
};
