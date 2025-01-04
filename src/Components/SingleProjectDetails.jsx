import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { updateProjectTodo } from "./apiOperations";
import { PlusCircleFilled } from "@ant-design/icons";
import AddIndividualTask from "./AddIndividualTask";
import IndividualTaskOperations from "./IndividualTaskOperations";
import StateContext from "./StateChangeContext";
import SingleProjectPageheader from "./SingleProjectPageheader";

const SingleProjectDetails = ({ data }) => {
  const {
    setSelectedProject,
    setProjects,
    projects,
    tasks,
    selectedProject,
    setSelectedTask,
  } = useContext(StateContext);

  let [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  useEffect(() => {
    setIsAddTaskVisible(false);
  }, [selectedProject]);
  const { project } = useParams();

  let [projectSelected] = projects.filter((element) => {
    return element.id === project;
  });

  if (!projectSelected) {
    return <div>Project not found!</div>;
  }

  let projectTasks = tasks.filter(
    (element) => element.projectId == projectSelected.id
  );

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
    setSelectedTask("");
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
