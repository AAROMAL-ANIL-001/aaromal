import React from "react";

const Header = ({ page }) => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a
              href={page === "signin" ? "/signup" : "/signin"}
              className="nav-link"
            >
              {page === "signin" ? (
                <div className="flex flex-col sm:flex-row items-center justify-end">
                  <span className="mr-2 sm:mr-5">Don't have an account? </span>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md ">
                    Sign Up
                  </button>
                </div>
              ) : page === "signup" ? (
                <div className="flex flex-col sm:flex-row items-center justify-end">
                  <span className="mr-2 sm:mr-5">
                    Already have an account?{" "}
                  </span>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-2 px-4 rounded-md">
                    Login
                  </button>
                </div>
              ) : null}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
