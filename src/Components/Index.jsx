import { InboxOutlined } from "@ant-design/icons";
import StateContext from "./StateChangeContext";
import { useContext } from "react";
const Index = ({ data }) => {
  function handleInboxChange() {
    setSelectedProject(data.id);
  }
  const { selectedProject, setSelectedProject } = useContext(StateContext);

  return (
    <div
      className={`flex gap-3 cursor-pointer p-2 rounded-lg ${
        selectedProject === data.id
          ? "bg-select_sidenav text-red"
          : "hover:bg-hover_sidenav"
      }`}
      onClick={handleInboxChange}
    >
      <InboxOutlined className="text-lg" />
      <p>{data.name}</p>
    </div>
  );
};

export default Index;
