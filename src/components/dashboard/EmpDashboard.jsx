import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmpDashboard = () => {
  return (
    <>
      <div className="p-10 bg-gray-300 h-screen ">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
};

export default EmpDashboard;


