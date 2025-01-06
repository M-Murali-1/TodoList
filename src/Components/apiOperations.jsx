import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");

export function addProjectTodo(newProject, projectDispatch) {
  console.log(newProject);

  api
    .addProject(newProject)
    .then((project) => {
      projectDispatch({ type: "ADD_PROJECT", payload: project });
    })
    .catch((error) => console.log(error));
}

export function removeProjectTodo(projectID, projectDispatch) {
  api
    .deleteProject(projectID)
    .then((isSuccess) => {
      projectDispatch({ type: "REMOVE_PROJECT", payload: projectID });
    })
    .catch((error) => console.log(error));
}

export function updateIsFavorite(projectID, status, projectDispatch) {
  api
    .updateProject(projectID, { isFavorite: `${!status}` })
    .then((isSuccess) => {
      projectDispatch({ type: "UPDATE_PROJECT", payload: isSuccess });
    })
    .catch((error) => console.log(error));
}

export function updateProjectTodo(project, projectDispatch) {
  api
    .updateProject(project.id, {
      name: project.name,
      isFavorite: `${project.isFavorite}`,
      color: project.color,
    })
    .then((isSuccess) => {
      projectDispatch({ type: "UPDATE_PROJECT", payload: isSuccess });
    })
    .catch((error) => console.log(error));
}

export function findFavourites(data) {
  let updated = data.filter((element) => element.isFavorite);
  return updated;
}

export function getAllProjects(projectDispatch) {
  api
    .getProjects()
    .then((projects) => {
      projectDispatch({ type: "ADD_ALL_PROJECTS", payload: projects });
      projectDispatch({ type: "UPDATE_LOADING" });
    })
    .catch((error) => console.log(error));
}

export function getAllTasks(taskDispatch) {
  api
    .getTasks()
    .then((tasks) => {
      console.log(tasks);

      taskDispatch({ type: "ADD_All_TASKS", payload: tasks });
      taskDispatch({ type: "UPDATE_LOADING" });
    })
    .catch((error) => console.log(error));
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

export function addTaskTodo(task, taskDispatch) {
  api
    .addTask(task)
    .then((addedTask) => {
      console.log(addedTask);
      taskDispatch({ type: "ADD_TASK", payload: addedTask });
    })
    .catch((error) => console.log(error.message));
}

export function removeTaskTodo(taskID, taskDispatch) {
  api
    .deleteTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);
      taskDispatch({ type: "REMOVE_TASK", payload: taskID });
    })
    .catch((error) => console.log(error));
}

export function updateTaskTodo(task, taskDispatch) {
  console.log("the updation of the task");

  api
    .updateTask(task.id, {
      content: task.content,
      description: task.description,
      projectId: task.projectId,
    })
    .then((isSuccess) => {
      console.log(isSuccess);
      taskDispatch({ type: "UPDATE_TASK", payload: isSuccess });
    })
    .catch((error) => console.log(error));
}

export function closeTaskTodo(taskID, taskDispatch) {
  api
    .closeTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);

      taskDispatch({ type: "REMOVE_TASK", payload: taskID });
    })
    .catch((error) => console.log(error));
}
