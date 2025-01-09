import { useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Select } from "antd";
import { addTaskTodo, updateTaskTodo } from "./apiOperations";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
const AddIndividualTask = ({
  onCancel,
  selectedProject,
  initial = { content: "", description: "", projectId: selectedProject },
  okButton = "Add Task",
}) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);
  console.log("within the individual add task :", projects);
  const [task, setTask] = useState(initial);

  function handleNameChange(e) {
    setTask({ ...task, content: e.target.value });
  }
  function handleDescriptionChange(e) {
    setTask({ ...task, description: e.target.value });
  }
  function handleSubmit() {
    if (initial.id != undefined) {
      updateTaskTodo(task, dispatch);
    } else {
      addTaskTodo(task, dispatch);
    }
    onCancel();
  }
  function handleProjectChange(value) {
    setTask({ ...task, projectId: value });
  }
  console.log("hello", selectedProject);

  return (
    <>
      <div>
        <Input
          placeholder="Task name"
          variant="borderless"
          className="text-xl font-bold"
          value={task.content}
          onChange={(e) => handleNameChange(e)}
        />
        <Input
          placeholder="Description"
          variant="borderless"
          className=""
          value={task.description}
          onChange={(e) => handleDescriptionChange(e)}
        />
      </div>
      <hr />
      {/* Div for the purpose of selecting the projects and the cancel and add buttons */}
      <div className="flex mt-3 justify-between">
        <Select
          className="w-2/5"
          defaultValue={task.projectId}
          onChange={handleProjectChange}
        >
          {projects.map((element) => (
            <Option value={element.id} key={element.id}>
              {element.name}
            </Option>
          ))}
        </Select>
        <div className="flex gap-3">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            type="primary"
            className={`bg-addbutton opacity-70 disabled:bg-addbutton disabled:opacity-30 disabled:text-white`}
            disabled={task.content.length === 0}
            onClick={handleSubmit}
          >
            {okButton}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddIndividualTask;
