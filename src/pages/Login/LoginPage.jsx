import React, { Component, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Login } from "../../LogReg/Login";
import Footer from "../../Components/footer";

export const LoginPage = ({ setIsAdmin, setIsLoggedIn, isAuth }) => {
  return (
    <div className="mainLogin">
      <h2 className="loginForm">Авторизація</h2>
      <Login
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
        isAuth={isAuth}
      />
      <p className="formRedirect">
        Or <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};
