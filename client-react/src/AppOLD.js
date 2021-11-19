import "./App.css";
import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Departments from "./components/departments";
// import Products from "./components/products";
// import ProductsList from "./components/productsList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && submit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <div className="divider">
          <div className="form">

            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>

            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            </div>
            <p>{formErrors.password}</p>

            <button className="fluid ui button blue">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default App;