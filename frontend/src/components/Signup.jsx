// src/components/Signup.jsx
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REFRESH_TOKEN } from "../constants";
import { useEffect } from "react";
import { isTokenExpired } from "../api";
import { useToast } from "../context/useToast";
import { api } from "../api";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let { showToast } = useToast();

  let registerUser = useCallback(async (e) => {
    e.preventDefault();

    try {
      let response = await api.post("api/signup/", {
        username: e.target.username.value,
        email: e.target.email.value,
        password1: e.target.password.value,
        password2: e.target.password.value,
      });

      if (response.status === 200) {
        let success = response.data.success;
        if (success) {
          showToast("Account was created successfully", "success");
          navigate("/login/");
        } else {
          showToast(response.data.error, "failure");
        }
      } else {
        showToast("An unexpected error occured, please try again", "failure");
      }
    } catch (error) {
      console.log(error);
      showToast("An unexpected error occured, please try again", "failure");
    }
  }, []);

  useEffect(() => {
    let refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (refreshToken && !isTokenExpired(refreshToken)) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem) px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white p-8 shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-lg">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>

          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Username"
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
