import { useState, useEffect, useContext } from "react";
import Index from "./Index";
import { getAllProjects, getInbox, getWithoutInbox } from "./apiOperations";
import Favourites from "./Favourites";
import Projects from "./Projects";
import AddTask from "./AddTask";
import StateContext from "./StateChangeContext";
const SidenavItems = () => {
  const { projectState } = useContext(StateContext);

  if (projectState.projectLoading) {
    return <h1>Loading</h1>;
  }
  let inbox = getInbox(projectState.projects);
  return (
    <div className="flex flex-col p-3 min-h-full  bg-sidenav">
      <AddTask
        data={projectState.projects}
        selectedProject={projectState.selectedProject}
      />
      <Index data={inbox[0]} />
      <Favourites />
      <Projects />
    </div>
  );
};

export default SidenavItems;
