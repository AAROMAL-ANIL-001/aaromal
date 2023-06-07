import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import backGround from "../assets/logs.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      email: email,
      password: password,
    };

    try {
      console.log(formData);
      const response = await axios.post("/api/login", formData);
      toast.success("Login successfull");
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflowY: "hidden",
      }}
    >
      <div className="flex justify-end w-full px-2 py-3 bg-transparent">
        <Header page="signin" />
      </div>

      <div className="py-3 px-5 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-lg bg-gray-50 rounded-lg border-gray-50 px-10 py-10">
          <p className="text-center px-3 mt-5">Welcome Back!</p>

          <form onSubmit={handleSubmit} className="m-5">
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control w-full p-2 bg-white shadow-md rounded-md"
                placeholder="Enter address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-full p-2 bg-white shadow-md rounded-md"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="mb-3">
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="py-3 text-center">
          <p className="text-white underline">Forgot your password?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
