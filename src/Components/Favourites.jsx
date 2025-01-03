import { findFavourites } from "./apiOperations";
import { Collapse } from "antd";
const { Panel } = Collapse;
import IndividualProject from "./IndividualProjectOperations";
import StateContext from "./StateChangeContext";
import { useContext } from "react";
const Favourites = ({ data, selectedProject, setSelectedProject }) => {
  let favourites = findFavourites(data);
  // const handleStateChange = useContext(StateContext);
  // handleStateChange();

  return (
    <div>
      <Collapse
        accordion
        defaultActiveKey={["1"]}
        expandIconPosition="end"
        bordered={false}
        className="bg-sidenav m-0"
      >
        <Panel header="Favourites" key="1">
          <IndividualProject
            list={favourites}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Favourites;
