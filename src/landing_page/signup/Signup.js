import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    // 2. Turn loading ON before the API call
    setIsLoading(true); 
    
    try {
        const response = await axios.post("...");
        // Handle success
    } catch (error) {
        // Handle error
    } finally {
        // 3. Turn loading OFF when it's done, whether it failed or succeeded
        setIsLoading(false); 
    }
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-backend-wzd3.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          localStorage.setItem("username", data.username);
          window.location.href = "https://zerodha-dashboard-ks5n.onrender.com/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container container mt-4">
      <h2 className="text-center">Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 container col-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 container col-6">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 container col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
          <span className="container form-text" id="emailHelp">
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
        <div className="container d-grid gap-2 col-6 mt-4">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? "Waking up server... (Please wait ~30s" : "Submit"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;