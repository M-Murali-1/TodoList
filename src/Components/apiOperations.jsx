import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");

export function addProjectTodo(newProject, setProjects, projects) {
  console.log(newProject);
  
  api
    .addProject(newProject)
    .then((project) => {
      setProjects((prev) => [...prev, project]);
    })
    .catch((error) => console.log(error));
}

export function removeProjectTodo(projectID, projects, setProjects) {
  api
    .deleteProject(projectID)
    .then((isSuccess) => {
      let data = projects.filter((element) => element.id !== projectID);
      setProjects(data);
    })
    .catch((error) => console.log(error));
}

export function updateIsFavorite(projectID, status, projects, setProjects) {
  api
    .updateProject(projectID, { isFavorite: `${!status}` })
    .then((isSuccess) => {
      let data = projects.map((element) => {
        if (element.id === projectID) {
          return isSuccess;
        }
        return element;
      });
      setProjects(data);
    })
    .catch((error) => console.log(error));
}

export function updateProjectTodo(project, setProjects, projects) {
  api
    .updateProject(project.id, {
      name: project.name,
      isFavorite: `${project.isFavorite}`,
      color: project.color,
    })
    .then((isSuccess) => {
      let data = projects.map((element) => {
        if (element.id === project.id) {
          return isSuccess;
        }
        return element;
      });
      setProjects(data);
    })
    .catch((error) => console.log(error));
}

export function findFavourites(data) {
  let updated = data.filter((element) => element.isFavorite);
  return updated;
}

export function getAllProjects(setProjects, setLoading) {
  api
    .getProjects()
    .then((projects) => {
      setProjects(projects);
      setLoading(false);
    })
    .catch((error) => console.log(error));
}

export function getAllTasks(setTasks, setTaskLoading) {
  api
    .getTasks()
    .then((tasks) => {
      console.log(tasks);
      setTasks(tasks);
      setTaskLoading(false);
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

export function addTaskTodo(task, tasks, setTasks) {
  api
    .addTask(task)
    .then((addedTask) => {
      console.log(addedTask);
      setTasks((prev) => [...prev, addedTask]);
    })
    .catch((error) => console.log(error.message));
}

export function removeTaskTodo(taskID, tasks, setTasks) {
  api
    .deleteTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);
      let updatedTasks = tasks.filter((element) => element.id != taskID);
      setTasks(updatedTasks);
    })
    .catch((error) => console.log(error));
}

export function updateTaskTodo(task, tasks, setTasks) {
  api
    .updateTask(task.id, {
      content: task.content,
      description: task.description,
      projectId: task.projectId,
    })
    .then((isSuccess) => {
      console.log(isSuccess);
      let updated = tasks.map((element) => {
        if (element.id === task.id) {
          return isSuccess;
        } else {
          return element;
        }
      });
      setTasks(updated);
    })
    .catch((error) => console.log(error));
}

export function closeTaskTodo(taskID, tasks, setTasks) {
  api
    .closeTask(taskID)
    .then((isSuccess) => {
      console.log(isSuccess);
      let updated = tasks.filter((element) => element.id != taskID);
      setTasks(updated);
    })
    .catch((error) => console.log(error));
}
