import { useState, useEffect, useContext } from "react";
import Index from "./Index";
import { getAllProjects, getInbox, getWithoutInbox } from "./apiOperations";
import Favourites from "./Favourites";
import Projects from "./Projects";
import AddTask from "./AddTask";
import StateContext from "./StateChangeContext";
const SidenavItems = () => {
  const { projects, setProjects, selectedProject, setSelectedProject,loading } =
    useContext(StateContext);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getAllProjects(setProjects, setLoading);
  // }, []);
  let inbox = getInbox(projects);
  let withoutInbox = getWithoutInbox(projects);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="flex flex-col p-3 min-h-full  bg-sidenav">
      <AddTask data={projects} selectedProject={selectedProject} />
      <Index
        data={inbox[0]}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Favourites
        data={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Projects
        data={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
};

export default SidenavItems;
