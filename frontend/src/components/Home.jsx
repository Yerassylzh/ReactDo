import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import { REFRESH_TOKEN } from "../constants";
import { isTokenExpired } from "../api";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <main>
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Be Productive, Be more <br className="hidden sm:inline" />
            with ReactDo
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We are ReactDo - All In One Productivity App. Not only a Productive
            app we are more !
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6">
            {user ? (
              <Link
                to="/todos/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md shadow-sm text-sm sm:text-base"
              >
                My todos
              </Link>
            ) : (
              <Link
                to="/signup/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md shadow-sm text-sm sm:text-base"
              >
                Register now
              </Link>
            )}
            <Link
              to="/learn-more/"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-6 rounded-md border border-gray-300 text-sm sm:text-base"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
