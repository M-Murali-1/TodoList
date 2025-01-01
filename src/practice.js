import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262")

api.getProjects()
    .then((projects) => console.log(projects))
    .catch((error) => console.log(error))


// api.addProject({ name: "Api call 2",color:"red",isFavorite:true })
//     .then((project) => console.log(project))
//     .catch((error) => console.log(error))


    // api.deleteProject("2345778451")
    // .then((isSuccess) => console.log(isSuccess))
    // .catch((error) => console.log(error))