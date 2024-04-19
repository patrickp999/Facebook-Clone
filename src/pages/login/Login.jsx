import React from "react";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <div className="register"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
