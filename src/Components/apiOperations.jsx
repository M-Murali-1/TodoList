import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");

export function addProjectTodo(newProject, handleStateChange) {
  console.log("in the add project : ", newProject);

  api
    .addProject(newProject)
    .then((project) => {
      console.log(project);
      handleStateChange();
    })
    .catch((error) => console.log(error));
}

export function removeProjectTodo(projectID, handleStateChange) {
  api
    .deleteProject(projectID)
    .then((isSuccess) => {
      console.log(isSuccess);
      handleStateChange();
    })
    .catch((error) => console.log(error));
}

export function updateIsFavorite(projectID, status, handleStateChange) {
  api
    .updateProject(projectID, { isFavorite: `${!status}` })
    .then((isSuccess) => {
      console.log(isSuccess);
      handleStateChange();
    })
    .catch((error) => console.log(error));
  // console.log(projectID,status,!status);
}

export function updateProjectTodo(element, handleStateChange) {
  api
    .updateProject(element.id, {
      name: element.name,
      isFavorite: `${element.isFavorite}`,
      color: element.color,
    })
    .then((isSuccess) => handleStateChange())
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
      console.log("After the refreshing:", projects);
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
  console.log("inside the filtering function,value", value);

  let searchData = data.filter((element) => {
    let nameLowercase = element.name.toLowerCase();
    if (nameLowercase.includes(value.toLowerCase())) {
      console.log(nameLowercase, value);
      return element;
    }
  });
  return searchData;
}
