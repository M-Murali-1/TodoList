import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { updateProjectTodo } from "./apiOperations";
import { PlusCircleFilled } from "@ant-design/icons";
import AddIndividualTask from "./AddIndividualTask";
import IndividualTaskOperations from "./IndividualTaskOperations";
import SingleProjectPageheader from "./SingleProjectPageheader";
import { useDispatch, useSelector } from "react-redux";
import { projectSelected, taskSelected } from "../features/selectedItemsSlice";
const SingleProjectDetails = () => {
  const projectss = useSelector((state) => state.project);
  console.log(projectss);
  const dispatch = useDispatch();
  const { projects, tasks, selectedProject } = useSelector((state) => ({
    projects: state.project.projects,
    tasks: state.task.tasks,
    selectedProject: state.selected.selectedProject,
  }));
  let [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  useEffect(() => {
    setIsAddTaskVisible(false);
  }, [selectedProject]);
  const { project } = useParams();

  let [projectClicked] = projects.filter((element) => {
    return element.id === project;
  });

  if (!projectClicked) {
    return <div>Project not found!</div>;
  }
  let projectTasks = tasks.filter(
    (element) => element.projectId == projectClicked.id
  );

  function handleMyProjects() {
    dispatch(projectSelected(""));
   }

  function handleNameChange(newtext) {
    console.log(newtext);
    projectClicked = { ...projectClicked, name: newtext };
    updateProjectTodo(projectClicked, dispatch);
  }

  function showAddTask() {
    setIsAddTaskVisible(true);
    dispatch(taskSelected(""));
   
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
            {projectClicked.name}
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
                selectedProject={projectClicked.id}
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
