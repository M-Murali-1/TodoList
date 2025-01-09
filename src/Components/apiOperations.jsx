import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");
import {
  addProject,
  removeProject,
  updateProject,
} from "../features/projectSlice";
import { addTask, removeTask, updateTask } from "../features/taskSlice";


export function addProjectTodo(newProject, dispatch) {
  console.log(newProject);

  api
    .addProject(newProject)
    .then((project) => {
      dispatch(addProject(project));
    })
    .catch((error) => console.log(error));
}

export function removeProjectTodo(projectID, dispatch) {
  api
    .deleteProject(projectID)
    .then((isSuccess) => {
      dispatch(removeProject(projectID));
    })
    .catch((error) => console.log(error));
}

export function updateIsFavorite(projectID, status, dispatch) {
  api
    .updateProject(projectID, { isFavorite: `${!status}` })
    .then((isSuccess) => {
      dispatch(updateProject(isSuccess));
    })
    .catch((error) => console.log(error));
}

export function updateProjectTodo(project, dispatch) {
  api
    .updateProject(project.id, {
      name: project.name,
      isFavorite: `${project.isFavorite}`,
      color: project.color,
    })
    .then((isSuccess) => {
      dispatch(updateProject(isSuccess));
    })
    .catch((error) => console.log(error));
}

export function findFavourites(data) {
  let updated = data.filter((element) => element.isFavorite);
  return updated;
}

export function getInbox(data) {
  let inbox = data.filter((element) => element.name === "Inbox");
  return inbox;
}

export function getWithoutInbox(data) {
  let inbox = data.filter((element) => element.name !== "Inbox");
  return inbox;
}

export function filterData(data, value) {
  let searchData = data.filter((element) => {
    let nameLowercase = element.name.toLowerCase();
    if (nameLowercase.includes(value.toLowerCase())) {
      console.log(nameLowercase, value);
      return element;
    }
  });
  return searchData;
}

export function addTaskTodo(task, dispatch) {
  api
    .addTask(task)
    .then((addedTask) => {
      console.log(addedTask);
      dispatch(addTask(addedTask));
    })
    .catch((error) => console.log(error.message));
}

export function removeTaskTodo(taskID, dispatch) {
  api
    .deleteTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);
      dispatch(removeTask(taskID));
    })
    .catch((error) => console.log(error));
}

export function updateTaskTodo(task, dispatch) {
  console.log("the updation of the task");

  api
    .updateTask(task.id, {
      content: task.content,
      description: task.description,
      projectId: task.projectId,
    })
    .then((isSuccess) => {
      console.log(isSuccess);
      dispatch(updateTask(isSuccess));
    })
    .catch((error) => console.log(error));
}

export function closeTaskTodo(taskID, dispatch) {
  api
    .closeTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);
      dispatch(removeTask(taskID));
    })
    .catch((error) => console.log(error));
}
