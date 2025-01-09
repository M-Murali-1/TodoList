import { InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { projectSelected } from "../features/selectedItemsSlice";
const Index = ({ data }) => {
  function handleInboxChange() {
    console.log("trail:", data.id);
    dispatch(projectSelected(data.id));
  }
  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.selected.selectedProject
  );
  console.log(
    "the selected project inside the index folder :",
    selectedProject
  );

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
