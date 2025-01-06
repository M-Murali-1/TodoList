import { Splitter } from "antd";
import { useContext } from "react";
import SidenavItems from "./Components/SidenavItems";
import { getWithoutInbox } from "./Components/apiOperations";
import StateContext from "./Components/StateChangeContext";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./Components/MyProjects";
import SingleProjectDetails from "./Components/SingleProjectDetails";

const App = () => {
  const {  projectState, taskState } = useContext(StateContext);
  const withoutInbox = getWithoutInbox(projectState.projects);
  console.log("Inide of the app", projectState, taskState);

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
