import ModelForProject from "./ModelForProject";
import StateContext from "./StateChangeContext";
import { Menu } from "antd";
import { useState, useContext } from "react";
import { removeProjectTodo, updateIsFavorite } from "./apiOperations";
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const MoreOptionsModel = ({ element }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects, setProjects } = useContext(StateContext);

  // Function for enabling the model.
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative left-10">
      <Menu>
        <Menu.Item key="1">
          <div className="flex gap-5" onClick={showModal}>
            <EditOutlined />
            <p>Edit</p>
          </div>
        </Menu.Item>

        <Menu.Item key="2">
          <div
            className="flex gap-5 "
            onClick={() => {
              updateIsFavorite(
                element.id,
                element.isFavorite,
                projects,
                setProjects
              );
            }}
          >
            {element.isFavorite ? <HeartFilled /> : <HeartOutlined />}
            <p>
              {element.isFavorite ? "Remove from Favorites" : "Add to Favorite"}
            </p>
          </div>
        </Menu.Item>

        <Menu.Item key="3">
          <div
            className="flex gap-5 text-red"
            onClick={() => removeProjectTodo(element.id, projects, setProjects)}
          >
            <DeleteOutlined />
            <p>Delete</p>
          </div>
        </Menu.Item>
      </Menu>
      {isModalOpen && (
        <ModelForProject
          title={"Edit"}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          initial={element}
          okButtonText="Save"
        />
      )}
    </div>
  );
};

export default MoreOptionsModel;
