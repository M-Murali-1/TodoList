import { Collapse } from "antd";
const { Panel } = Collapse;
import IndividualProject from "./IndividualProject";
import SidenavContentHeaders from "./SidenavContentHeaders";

const Projects = ({ data, selectedProject, setSelectedProject }) => {
  function handleChange() {
    console.log("Hello");
  }
  return (
    <div>
      <Collapse
        accordion
        defaultActiveKey={["1"]}
        expandIconPosition="end"
        bordered={false}
        className="bg-sidenav"
        
      >
        <Panel
          header={
            <div onClick={(e) => e.stopPropagation()}>
              <SidenavContentHeaders setSelectedProject={setSelectedProject}/>
            </div>
          }
          key="1"
        >
          <IndividualProject
            list={data}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Projects;
