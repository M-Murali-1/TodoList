import { useState, useEffect } from "react";
import Index from "./Index";
import { getAllProjects, getInbox } from "./apiOperations";
import Favourites from "./Favourites";
import Projects from "./Projects";
import AddTask from "./AddTask";
const SidenavItems = ({
  projects,
  setProjects,
  stateChange,
  
}) => {
  // const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState("");
 
  useEffect(() => {
    console.log("stateChange updated: ", stateChange);
    getAllProjects(setProjects, setLoading);
  }, [stateChange]);
  let inbox = getInbox(projects);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
      <div className="flex flex-col p-3 min-h-full  bg-sidenav">
        <AddTask />
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
