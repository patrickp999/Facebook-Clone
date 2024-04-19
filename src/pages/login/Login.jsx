import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import LoginInput from "../../components/inputs/loginInput/LoginInput";

const loginInfos = {
  email: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {({ field, meta }) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email address or phone number"
                      onChange={handleLoginChange}
                      bottom={false}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginChange}
                      bottom={true}
                    />
                    <button className="blue_btn" type="submit">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link className="forgot_password" to="/forgot">
                Forgot password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Crete Account</button>
            </div>
            <Link className="sign_extra" to="/">
              <b>Create a Page </b>
              for a celebrity, band or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}

export default Login;
