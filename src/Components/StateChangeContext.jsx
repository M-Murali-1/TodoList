import React, { createContext } from "react";
import { useState, useEffect } from "react";
//import { getAllProjects, getAllTasks } from
import { getAllProjects, getAllTasks } from "./apiOperations";

const StateContext = createContext();
export const StateChangeContext = ({children}) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskLoading, setTaskLoading] = useState(true);
  useEffect(() => {
    getAllProjects(setProjects, setLoading);
    getAllTasks(setTasks, setTaskLoading);
  }, []);
  console.log("the tasks are :", tasks);

  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  return (
    <StateContext.Provider
      value={{
        projects,
        setProjects,
        setSelectedProject,
        selectedProject,
        loading,
        taskLoading,
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
