import { ReactNode, useContext, useState } from "react";
import { Navigate, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { AuthContext } from "../context/AuthContext";
import { REFRESH_TOKEN } from "../constants";
import { useEffect } from "react";
import { isTokenExpired } from "../api";

export default function PrivateRoute({ children }) {
  let { setUser } = useContext(AuthContext);
  let [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    let refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken || isTokenExpired(refreshToken)) {
      setIsAuthenticated(false);
      setUser(null);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/login/" />;
}
