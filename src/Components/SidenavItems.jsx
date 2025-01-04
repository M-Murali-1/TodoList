import { useState, useEffect, useContext } from "react";
import Index from "./Index";
import { getAllProjects, getInbox, getWithoutInbox } from "./apiOperations";
import Favourites from "./Favourites";
import Projects from "./Projects";
import AddTask from "./AddTask";
import StateContext from "./StateChangeContext";
const SidenavItems = () => {
  const { projects, selectedProject, setSelectedProject, loading } =
    useContext(StateContext);

  let inbox = getInbox(projects);
  if (loading) {
    return <h1>Loading</h1>;
  }
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
