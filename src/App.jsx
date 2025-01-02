import { Splitter } from "antd";
import { useState } from "react";
import SidenavItems from "./Components/SidenavItems";
import { getWithoutInbox } from "./Components/apiOperations";
import { StateChangeContext } from "./Components/StateChangeContext";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./Components/MyProjects";
import SingleProjectDetails from "./Components/SingleProjectDetails";
const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const withoutInbox = getWithoutInbox(projects);
  return (
    <StateChangeContext projects={projects} setProjects={setProjects}>
      <Splitter
        style={{
          height: "100vh",
        }}
      >
        <Splitter.Panel defaultSize="20%" min="15%" max="30%">
          <SidenavItems
            projects={projects}
            setProjects={setProjects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Splitter.Panel>
        <Splitter.Panel>
          <Routes>
            <Route
              path="/myprojects"
              element={
                <MyProjects
                  data={withoutInbox}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              }
            />
            <Route
              path="/myprojects/:project"
              element={<SingleProjectDetails data={withoutInbox} />}
            />
          </Routes>
        </Splitter.Panel>
      </Splitter>
    </StateChangeContext>
  );
};

export default App;
