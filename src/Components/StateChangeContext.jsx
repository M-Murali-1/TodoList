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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
