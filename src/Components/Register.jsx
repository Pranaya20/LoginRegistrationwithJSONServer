import React, { useState } from "react";
import "../Style/RegisterStyle.css";
import { Validation_Register } from "./Validation";
import { defaultInfutField, APP_URL } from "../Utils/Constant";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { fetchCartData } from "../Utils/Api";

console.log("APP_URL:-", APP_URL);
const Register = () => {
  const navigate = useNavigate();
  console.log("navigate:-",navigate);
  const [inputField, setInputField] = useState(defaultInfutField);
  const [error, setError] = useState({});
  const [cartInformation, setCartInformation] = useState([]);

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  // const fetchData = () => {
  //   fetchCartData().then((result) => {
  //     setCartInformation(result)
  //   })
  // }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pranaya");
    const fonmError = Validation_Register(inputField, error);
    setError({ ...error, ...fonmError });
    const flag = false;
    if (
      error.firstname === "" &&
      error.lastname === "" &&
      error.email === "" &&
      error.phoneno === "" &&
      error.password === "" &&
      error.Confirmpassword === ""
    ) {
      axios
        .post(APP_URL, inputField)
        .then((result) => {
          console.log("result:-", result);
          toast("Registration Completed");
          navigate('/login');
        })
        .catch((err) => console.error("error:-", err));
    }
   
  };

  return (
    <div className="container">
      <div className="main-container">
        <ToastContainer />
        <h2>Registration Form</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputfirstname"
              name="firstname"
              value={inputField.firstname}
              onChange={handleChange}
            />
            <p className="error-msg">{error.firstname}</p>
          </div>
          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputlastname"
              name="lastname"
              value={inputField.lastname}
              onChange={handleChange}
            />
            <p className="error-msg">{error.lastname}</p>
          </div>
          <div className="form-group">
            <label for="phoneno">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputphoneno"
              name="phoneno"
              value={inputField.phoneno}
              onChange={handleChange}
            />
            <p className="error-msg">{error.phoneno}</p>
          </div>
          <div className="form-group">
            <label for="Email1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={inputField.email}
              onChange={handleChange}
            />
            <p className="error-msg">{error.email}</p>
          </div>
          <div className="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="password"
              value={inputField.password}
              onChange={handleChange}
            />
            <p className="error-msg">{error.password}</p>
          </div>
          <div className="form-group">
            <label for="Password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="Confirmpassword"
              value={inputField.Confirmpassword}
              onChange={handleChange}
            />
            <p className="error-msg">{error.Confirmpassword}</p>
          </div>
          <button type="submit" className="btn btn-primary " name="create">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
