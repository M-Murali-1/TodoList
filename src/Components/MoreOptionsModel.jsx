import { useState, useContext } from "react";
import { Menu } from "antd";
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { removeProjectTodo, updateIsFavorite } from "./apiOperations";
import ModelForProject from "./ModelForProject";
import StateContext from "./StateChangeContext";

const MoreOptionsModel = ({ element }) => {
  console.log("This is the more data", element.isFavorite);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleStateChange = useContext(StateContext);

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
                handleStateChange
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
            onClick={() => removeProjectTodo(element.id, handleStateChange)}
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
