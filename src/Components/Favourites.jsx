import { Collapse } from "antd";
const { Panel } = Collapse;
import IndividualProject from "./IndividualProjectOperations";

const Favourites = () => {
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
          <IndividualProject type="favourites" />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Favourites;
