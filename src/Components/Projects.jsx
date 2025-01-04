import { Collapse } from "antd";
import IndividualProject from "./IndividualProjectOperations";
import SidenavContentHeaders from "./SidenavContentHeaders";
const { Panel } = Collapse;
const Projects = () => {
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
              <SidenavContentHeaders />
            </div>
          }
          key="1"
        >
          <IndividualProject />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Projects;
