import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ACCESS_TOKEN, baseUrl, REFRESH_TOKEN } from "../constants";
import { useToast } from "./useToast";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  let { showToast } = useToast();

  let [user, setUser] = useState(() =>
    localStorage.getItem(ACCESS_TOKEN)
      ? jwtDecode(localStorage.getItem(ACCESS_TOKEN))
      : null
  );

  const navigate = useNavigate();

  const loginUser = useCallback(async (e) => {
    e.preventDefault();

    $("#login-btn > svg").toggleClass("hidden");
    $("#login-btn").attr("disabled", "true");

    try {
      let response = await axios.post(`${baseUrl}/api/token/`, {
        username: e.target.username.value,
        password: e.target.password.value,
      });
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        setUser(jwtDecode(response.data.access));
        showToast("Authorized successfully", true);
        navigate("/");
      } else {
        showToast("Authorization failed", false);
      }
    } catch (error) {
      showToast("Incorrect username or password", false);
    } finally {
      $("#login-btn > svg").toggleClass("hidden");
      $("#login-btn").removeAttr("disabled");
    }
  }, []);

  const logout = useCallback(() => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      setUser(null);
      showToast("Logged out successfully", true);
      navigate("/");
    }
  }, []);

  const contextData = {
    user: user,
    setUser: setUser,
    loginUser: loginUser,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
