import React, { createContext } from "react";

const StateContext = createContext();
export const StateChangeContext = ({
  children,
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
}) => {
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
