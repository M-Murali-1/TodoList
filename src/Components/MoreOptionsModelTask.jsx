import { Menu } from "antd";
import { useContext } from "react";
import StateContext from "./StateChangeContext";
import { DeleteOutlined } from "@ant-design/icons";
import { removeTaskTodo } from "./apiOperations";
const MoreOptionsModelTask = ({ element }) => {
  const { tasks, setTasks } = useContext(StateContext);
  return (
    <div>
      <Menu>
        <Menu.Item key="1">
          <div
            className="flex gap-5 text-red"
            onClick={() => removeTaskTodo(element.id, tasks, setTasks)}
          >
            <DeleteOutlined />
            <p>Delete</p>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MoreOptionsModelTask;
