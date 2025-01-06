import { useContext, useState } from "react";
import { Checkbox, Dropdown } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { closeTaskTodo } from "./apiOperations";
import MoreOptionsModelTask from "./MoreOptionsModelTask";
import AddIndividualTask from "./AddIndividualTask";
import StateContext from "./StateChangeContext";
const IndividualTaskOperations = ({ element }) => {
  const { projectDispatch, taskDispatch, projectState, taskState } =
    useContext(StateContext);
  const [editable, setEditable] = useState(false);

  function handleEdit() {
    setEditable(true);
    console.log("Updating the task");
    
    taskDispatch({ type: "UPDATE_SELECTED", payload: element.id });
  }
  function handleCancel() {
    setEditable(false);
  }
  function handleChecked(e) {
    closeTaskTodo(e.target.value, taskDispatch);
  }

  return (
    <>
      {!(editable && taskState.selectedTask == element.id) && (
        <div className="flex justify-between group ">
          <Checkbox
            key={element.id}
            value={element.id}
            className="rounded-full"
            onChange={handleChecked}
          >
            <div className="px-2 py-1">
              <h2>{element.content}</h2>
              <h1>{element.description}</h1>
            </div>
          </Checkbox>
          <div className="flex gap-5 text-lg opacity-0 group-hover:opacity-100 cursor-pointer">
            <EditOutlined onClick={handleEdit} />

            <Dropdown
              trigger={["click"]}
              overlay={<MoreOptionsModelTask element={element} />}
              placement="rightTop"
            >
              <EllipsisOutlined />
            </Dropdown>
          </div>
        </div>
      )}
      {editable && taskState.selectedTask === element.id && (
        <AddIndividualTask
          onCancel={handleCancel}
          selectedProject={projectState.selectedProject}
          initial={element}
          okButton="Update Task"
        />
      )}
    </>
  );
};

export default IndividualTaskOperations;
