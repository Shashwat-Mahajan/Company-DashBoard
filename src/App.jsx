import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import "./App.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getlocalStorage, setLocalStorage } from "./utils/localStorage";
import { toast } from "react-toastify";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const authData = useContext(AuthContext);
  const [loggedinUserData, setLoggedinUserData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedinUser = localStorage.getItem("loggedinUser");
    if (loggedinUser) {
      setUser(loggedinUser.role);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin1@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedinUserData(employee);
        localStorage.setItem(
          "loggedinUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      toast.warning("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : user === "employee" ? <EmployeeDashboard data={loggedinUserData} /> : null}
    </>
  );
}

export default App;
