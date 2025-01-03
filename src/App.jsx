import { Splitter } from "antd";
import { useState,useEffect } from "react";
import SidenavItems from "./Components/SidenavItems";
import { getWithoutInbox,getAllProjects, getAllTasks } from "./Components/apiOperations";
import { StateChangeContext } from "./Components/StateChangeContext";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./Components/MyProjects";
import SingleProjectDetails from "./Components/SingleProjectDetails";
const App = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskLoading,setTaskLoading] = useState(true);
    useEffect(() => {
      getAllProjects(setProjects,setLoading);
      getAllTasks(setTasks,setTaskLoading);
    }, []);
    console.log("the tasks are :",tasks);
    
  const [selectedProject, setSelectedProject] = useState("");
  const withoutInbox = getWithoutInbox(projects);
  return (
    <StateChangeContext
      projects={projects}
      setProjects={setProjects}
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
      loading={loading}
      taskLoading={taskLoading}
      tasks={tasks}
      setTasks={setTasks}
    >
      <Splitter
        style={{
          height: "100vh",
        }}
      >
        <Splitter.Panel defaultSize="20%" min="15%" max="30%">
          <SidenavItems />
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
