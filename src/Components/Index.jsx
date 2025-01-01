import { InboxOutlined } from "@ant-design/icons";
const Index = ({ data, selectedProject, setSelectedProject }) => {
  function handleInboxChange() {
    setSelectedProject(data.id);
  }

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
