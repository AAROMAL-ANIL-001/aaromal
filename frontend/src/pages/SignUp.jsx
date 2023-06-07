import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import backGround from "../assets/logs.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Send the form data to the backend using Axios
      const response = await axios.post("/api/todo", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    // Reset the form fields
    setName("");
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
        <Header page="signup" />
      </div>

      <div className="py-3 px-5 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-lg bg-gray-50 rounded-lg border-gray-50 px-10 py-10">
          <p className="text-center px-3 mt-5">Let's go!</p>
          <form onSubmit={handleSubmit} className="m-5">
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control w-full p-2 bg-white shadow-md rounded-md"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control w-full p-2 bg-white shadow-md rounded-md"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label">
                Choose Password
              </label>
              <input
                type="password"
                className="form-control w-full p-2 bg-white shadow-md rounded-md"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md w-full"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
