import { useEffect, createContext, useReducer } from "react";
import { getAllProjects, getAllTasks } from "./apiOperations";
const StateContext = createContext();

const initialProjectState = {
  projects: [],
  selectedProject: "",
  projectLoading: true,
};

const ADD_ALL_PROJECTS = "ADD_ALL_PROJECTS"

const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL_PROJECTS":
      return { ...state, projects: action.payload };
    case "UPDATE_LOADING":
      return { ...state, projectLoading: false };
    case "UPDATE_SELECTED":
      return { ...state, selectedProject: action.payload };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((element) =>
          element.id === action.payload.id ? action.payload : element
        ),
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (element) => element.id != action.payload
        ),
      };
  }
};

const initialTaskState = {
  tasks: [],
  selectedTask: "",
  taskLoading: true,
};
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_All_TASKS":
      return { ...state, tasks: action.payload };
    case "UPDATE_LOADING":
      return { ...state, taskLoading: false };
    case "UPDATE_SELECTED":
      return { ...state, selectedTask: action.payload };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((element) =>
          element.id === action.payload.id ? action.payload : element
        ),
      };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((element) => element.id != action.payload),
      };
  }
};

export const StateChangeContext = ({ children }) => {
  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    initialProjectState
  );
  const [taskState, taskDispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    getAllProjects(projectDispatch);
    getAllTasks(taskDispatch);
  }, []);

  return (
    <StateContext.Provider
      value={{
        projectState,
        taskState,
        projectDispatch,
        taskDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
