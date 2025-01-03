import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ModelForProject from "./ModelForProject";
import { useNavigate } from "react-router-dom";
const SidenavContentHeaders = ({setSelectedProject}) => {
  const initial = { name: "", isFavorite: false, color: "charcoal" };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e) => {
    setIsModalOpen(true);
    e.stopPropagation();
  };

  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex justify-between"
        onClick={() => {
          navigate("/myprojects");
          setSelectedProject("");
        }}
      >
        <p>My Projects</p>
        <div onClick={showModal}>
          <PlusOutlined />
        </div>
      </div>
      <ModelForProject
        title={"Add Project"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        initial={initial}
        okButtonText={"Add"}
      />
    </div>
  );
};

export default SidenavContentHeaders;
