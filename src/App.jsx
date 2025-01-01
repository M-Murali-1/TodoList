import { Splitter } from "antd";
import { useState } from "react";
import SidenavItems from "./Components/SidenavItems";
import { getWithoutInbox } from "./Components/apiOperations";
import { StateChangeContext } from "./Components/StateChangeContext";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./Components/MyProjects";
const App = () => {
  const [projects, setProjects] = useState([]);
  const [stateChange, setStateChange] = useState(false);
  function handleStateChange() {
    setStateChange(!stateChange);
  }
  const withoutInbox = getWithoutInbox(projects);
  return (
    <StateChangeContext handleStateChange={handleStateChange}>
      <Splitter
        style={{
          height: "100vh",
        }}
      >
        <Splitter.Panel defaultSize="20%" min="15%" max="30%">
          <SidenavItems
            projects={projects}
            setProjects={setProjects}
            stateChange={stateChange}
          />
        </Splitter.Panel>
        <Splitter.Panel>
          <Routes>
            <Route
              path="/myprojects"
              element={<MyProjects data={withoutInbox} />}
            />
          </Routes>
        </Splitter.Panel>
      </Splitter>
    </StateChangeContext>
  );
};

export default App;
