import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React from "react";

export default function Header() {
  const [isMenuOpened, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpened);
  };

  let { user, logout } = useContext(AuthContext);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold text-xl">ReactDo</span>
            </Link>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/create-todo/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create todo
            </Link>
            <Link
              to="/todos/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Todos
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              More
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="hidden sm:flex sm:items-center sm:space-x-3">
              {user === null ? (
                <React.Fragment>
                  <Link
                    to="/login/"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-md border border-gray-300"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup/"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm"
                  >
                    Sign up
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="flex justify-center items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p className="text-gray-700 text-base">{user.username}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm"
                  >
                    Logout
                  </button>
                </React.Fragment>
              )}
            </div>
            <div className="lg:hidden ml-3">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpened}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={isMenuOpened ? "lg:hidden" : "lg:hidden hidden"}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/create-todo/"
            className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Create todo
          </Link>
          <Link
            to="/todos/"
            className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Todos
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            More
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 px-5 sm:hidden">
          <div className="flex items-center space-x-3">
            <Link
              to="/login/"
              className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-md border border-gray-300"
            >
              Log in
            </Link>
            <Link
              to="/signup/"
              className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
