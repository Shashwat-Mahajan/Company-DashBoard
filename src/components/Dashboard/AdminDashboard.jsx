import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-7 w-full h-screen">
      <Header data={props.data} changeUser={props.changeUser}/>
      <CreateTask data={props.data}/>
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
