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
      const userData = JSON.parse(loggedinUser);
      setUser(loggedinUser.role);
      setLoggedinUserData(userData.data)
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin1@example.com" && password == "123") {
      const admin = authData.admin.find((a) => a.email == email);
      setLoggedinUserData(admin);
      setUser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin",data:admin }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedinUserData(employee);
        localStorage.setItem(
          "loggedinUser",
          JSON.stringify({ role: "employee" ,  data:employee})
        );
      }
    } else {
      toast.warning("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard data={loggedinUserData} /> : user === "employee" ? <EmployeeDashboard data={loggedinUserData} /> : null}
    </>
  );
}

export default App;
