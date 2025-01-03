import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StateContext from "./StateChangeContext";
import SingleProjectPageheader from "./SingleProjectPageheader";
import { Radio, Typography } from "antd";
import { updateProjectTodo } from "./apiOperations";
import { PlusCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import AddIndividualTask from "./AddIndividualTask";
import IndividualTaskOperations from "./IndividualTaskOperations";
const SingleProjectDetails = ({ data }) => {
  const { setSelectedProject, setProjects, projects, tasks, selectedProject } =
    useContext(StateContext);
  let [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  console.log(tasks, "in the single page ");
  console.log("the selected project is :", selectedProject);
  useEffect(() => {
    setIsAddTaskVisible(false);
  }, [selectedProject]);
  const { project } = useParams();
  console.log(data, "rerendering");

  let [projectSelected] = projects.filter((element) => {
    return element.id === project;
  });

  let projectTasks = tasks.filter(
    (element) => element.projectId == projectSelected.id
  );
  //console.log(projectTasks, "in the selected tasks","the project is is ",projectSelected.id,project);
  //selectedProject(projectSelected.id);
  //console.log("The selected project is ",projectSelected.name);
  if (!projectSelected) {
    return <div>Project not found!</div>;
  }
  function handleMyProjects() {
    setSelectedProject("");
  }
  function handleNameChange(newtext) {
    console.log(newtext);
    projectSelected = { ...projectSelected, name: newtext };
    updateProjectTodo(projectSelected, setProjects, projects);
  }
  function showAddTask() {
    setIsAddTaskVisible(true);
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
          {/* <p>{JSON.stringify(projectTasks)}</p> */}
          {/* <Checkbox>Checkbox</Checkbox> */}
          {projectTasks.map((element) => (
            <div>
              <IndividualTaskOperations element={element} />
              <hr />
            </div>
          ))}
          {isAddTaskVisible && (
            <div className="border p-5 rounded-lg border-black">
              <AddIndividualTask
                projects={projects}
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
