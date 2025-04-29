import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "../components/common/Footer";
import { useAuth, AuthProvider } from "../context/useAuth";
import { CreateToDo } from "./CreateToDo";
import PrivateRoute from "../utils/PrivateRoute";
import { ToastProvider } from "../context/useToast";
import { ToDos } from "./ToDos";

export let navigateRef;

export const setNavigateRef = (navigate) => {
  navigateRef = navigate;
};

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigateRef(navigate);
  }, [navigate]);

  return (
    <ToastProvider>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/login/" element={<Login />} />
          <Route
            path="/create-todo/"
            element={
              <PrivateRoute>
                <CreateToDo />
              </PrivateRoute>
            }
          />
          <Route
            path="/todos/"
            element={
              <PrivateRoute>
                <ToDos />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </ToastProvider>
  );
}
