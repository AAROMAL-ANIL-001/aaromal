import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/home.jpg";
import iroid1 from "../assets/iroid1.png";
import iroid2 from "../assets/iroid2.png";
import iroid3 from "../assets/iroid3.png";
import iroid4 from "../assets/iroid4.png";
import iroid5 from "../assets/iroid5.png";
import iroid6 from "../assets/iroid6.png";
import iroid7 from "../assets/iroid7.png";
import iroid8 from "../assets/iroid8.png";
import Pagination from "../components/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const filenames = [
    iroid1,
    iroid2,
    iroid3,
    iroid4,
    iroid5,
    iroid6,
    iroid7,
    iroid8,
  ];

  const [name, setName] = useState(""); // State variable to store the name

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));

      // Update the name state if available
      console.log(user.user.name);

      if (user && user.user.name) {
        setName(user.user.name);
        console.log(user);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/signin");
  };
  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div
      className="py-3 px-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-end w-full px-2 py-3 bg-transparent">
        <header>
          <nav>
            <div className="nav-container">
              <span className="mr-5">
                {" "}
                {name ? (
                  `Hi ,${name}`
                ) : (
                  <span className="text-red-600 font-bold">Please login</span>
                )}
              </span>
              {name ? (
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        </header>
      </div>

      <main className="flex justify-center items-center ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center flex-col ">
            <div>
              <h3 className="font-bold text-lg text-gray-500">
                Name your Organization
              </h3>
            </div>
            <div>
              <input
                style={{ width: 400 }}
                className="p-2 m-5 rounded-md shadow-md text-center"
                placeholder="enter organization name"
              />
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-lg text-gray-500">
                Select your Organization Type below
              </h3>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 overflow-y-scroll"
              style={{ maxHeight: "300px" }}
            >
              {filenames.map((file, index) => (
                <div key={index} className="rounded-md overflow-hidden">
                  <img
                    src={file}
                    alt={`iroid${index + 1}`}
                    className="w-full h-full cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 mb-10">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-7 rounded-md ">
              Next
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Pagination activePage={1} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
