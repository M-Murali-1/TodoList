import React, { useState, useContext } from "react";
import Input from "antd/es/input/Input";
import { Button, Select } from "antd";
import { addTaskTodo,updateTaskTodo } from "./apiOperations";
import StateContext from "./StateChangeContext";
const { Option } = Select;
const AddIndividualTask = ({
  projects,
  onCancel,
  selectedProject,
  initial = { content: "", description: "", projectId: selectedProject },
}) => {
  console.log(projects);
  console.log("individual in the adding", initial);

  const { tasks, setTasks } = useContext(StateContext);
  //const initial = { content: "", description: "", projectId: selectedProject };
  console.log("The selected project id :", selectedProject);

  const [task, setTask] = useState(initial);
  console.log(task);
  console.log(initial.id);

  function handleNameChange(e) {
    setTask({ ...task, content: e.target.value });
    console.log("Updated task :", task);
  }
  function handleDescriptionChange(e) {
    setTask({ ...task, description: e.target.value });
  }
  function handleSubmit() {
    console.log(task);
    if (initial.id != undefined) {
      console.log("This is the updation");
      updateTaskTodo(task, tasks, setTasks);
    } else {
      addTaskTodo(task, tasks, setTasks);
    }
    //setTask(initial);
    onCancel();
  }
  function handleProjectChange(value) {
    setTask({ ...task, projectId: value });
  }
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
            className={`bg-addbutton`}
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddIndividualTask;
