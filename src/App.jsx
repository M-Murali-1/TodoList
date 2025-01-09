import { Splitter } from "antd";
import { useEffect } from "react";
import SidenavItems from "./Components/SidenavItems";
import { getWithoutInbox } from "./Components/apiOperations";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./Components/MyProjects";
import SingleProjectDetails from "./Components/SingleProjectDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "./features/projectSlice";
import { fetchTasks } from "./features/taskSlice";
const App = () => {
  const projects = useSelector((state) => state.project.projects);
  const withoutInbox = getWithoutInbox(projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchTasks());
  }, []);

  return (
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
          <Route index element={<MyProjects data={withoutInbox} />} />
          <Route
            path="/myprojects"
            element={<MyProjects data={withoutInbox} />}
          />
          <Route
            path="/myprojects/:project"
            element={<SingleProjectDetails />}
          />
        </Routes>
      </Splitter.Panel>
    </Splitter>
  );
};

export default App;
