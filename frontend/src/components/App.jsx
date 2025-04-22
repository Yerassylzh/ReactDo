import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";
import { AuthProvider } from "../context/AuthContext";
import { CreateToDo } from "./CreateToDo";
import PrivateRoute from "../utils/PrivateRoute";
import { ToastProvider } from "../context/useToast";
import { ToDos } from "./Todos";

export let navigateRef;

export const setNavigate = (navigate) => {
  navigateRef = navigate;
};

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <div className="App">
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
    </div>
  );
}
