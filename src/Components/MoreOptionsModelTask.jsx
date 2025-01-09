import { Menu } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { removeTaskTodo } from "./apiOperations";
import { useDispatch } from "react-redux";
const MoreOptionsModelTask = ({ element }) => {
 
  const dispatch = useDispatch();
  return (
    <div>
      <Menu>
        <Menu.Item key="1">
          <div
            className="flex gap-5 text-red"
            onClick={() => removeTaskTodo(element.id,dispatch)}
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
