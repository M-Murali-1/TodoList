import Index from "./Index";
import { getInbox } from "./apiOperations";
import Favourites from "./Favourites";
import Projects from "./Projects";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";
const SidenavItems = () => {
  const { projects, projectLoading, selectedProject } = useSelector(
    (state) => ({
      projects: state.project.projects,
      projectLoading: state.project.projectLoading,
      selectedProject: state.selected.selectedProject,
    })
  );
  if (projectLoading) {
    return <h1>Loading</h1>;
  }
  let inbox = getInbox(projects);
  return (
    <div className="flex flex-col p-3 min-h-full  bg-sidenav">
      <AddTask data={projects} selectedProject={selectedProject} />
      <Index data={inbox[0]} />
      <Favourites />
      <Projects />
    </div>
  );
};

export default SidenavItems;
