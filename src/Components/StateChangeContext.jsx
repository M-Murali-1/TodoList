import { useState, useEffect, createContext } from "react";
import { getAllProjects, getAllTasks } from "./apiOperations";
const StateContext = createContext();

export const StateChangeContext = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [loading, setLoading] = useState(true);
 
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState("");

  useEffect(() => {
    getAllProjects(setProjects, setLoading);
    getAllTasks(setTasks, setTaskLoading);
  }, []);

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
