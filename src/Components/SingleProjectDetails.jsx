import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { updateProjectTodo } from "./apiOperations";
import { PlusCircleFilled } from "@ant-design/icons";
import AddIndividualTask from "./AddIndividualTask";
import IndividualTaskOperations from "./IndividualTaskOperations";
import StateContext from "./StateChangeContext";
import SingleProjectPageheader from "./SingleProjectPageheader";

const SingleProjectDetails = () => {
  const { projectDispatch, taskDispatch, projectState, taskState } =
    useContext(StateContext);

  let [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  useEffect(() => {
    setIsAddTaskVisible(false);
  }, [projectState.selectedProject]);
  const { project } = useParams();

  let [projectSelected] = projectState.projects.filter((element) => {
    return element.id === project;
  });

  if (!projectSelected) {
    return <div>Project not found!</div>;
  }
  let projectTasks = taskState.tasks.filter(
    (element) => element.projectId == projectSelected.id
  );

  function handleMyProjects() {
    projectDispatch({ type: "UPDATE_SELECTED", payload: "" });
  }

  function handleNameChange(newtext) {
    console.log(newtext);
    projectSelected = { ...projectSelected, name: newtext };
    updateProjectTodo(projectSelected, projectDispatch);
  }

  function showAddTask() {
    setIsAddTaskVisible(true);
    taskDispatch({ type: "UPDATE_SELECTED", payload: "" });
  }

  function closeAddtask() {
    setIsAddTaskVisible(false);
  }

  return (
    <>
      <SingleProjectPageheader handleMyProjects={handleMyProjects} />
      <div className="flex justify-center w-full">
        <div className="flex flex-col m-5 gap-3 w-7/12 ">
          <Typography.Title
            level={3}
            className="text-2xl"
            editable={{ onChange: handleNameChange }}
          >
            {projectSelected.name}
          </Typography.Title>
          {projectTasks.map((element) => (
            <div>
              <IndividualTaskOperations element={element} />
              <hr />
            </div>
          ))}
          {isAddTaskVisible && (
            <div className="border p-5 rounded-lg border-black">
              <AddIndividualTask
                onCancel={closeAddtask}
                selectedProject={projectSelected.id}
              />
            </div>
          )}

          {!isAddTaskVisible && (
            <div
              className="flex gap-2 cursor-pointer group"
              onClick={showAddTask}
            >
              <PlusCircleFilled className="group-hover:text-red text-base" />
              <p className="opacity-80 group-hover:text-addbutton">Add task</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProjectDetails;
