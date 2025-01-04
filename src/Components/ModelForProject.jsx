import { Modal } from "antd";
import { useState, useContext } from "react";
import { addProjectTodo, updateProjectTodo } from "./apiOperations";
import AddProject from "./AddProject";
import StateContext from "./StateChangeContext";

const ModelForProject = ({
  isModalOpen,
  setIsModalOpen,
  initial,
  title,
  okButtonText,
}) => {
  const [project, setProject] = useState(initial);
  // Calling the handlingstate change function which will reload the page again.
  const { projects, setProjects } = useContext(StateContext);

  const handleOk = () => {
    setIsModalOpen(false);
    if (project.id != undefined) {
      updateProjectTodo(project, setProjects, projects);
    } else {
      addProjectTodo(project, setProjects, projects);
    }
    setProject(initial);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setProject(initial);
  };
  return (
    <div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okButtonText}
        okButtonProps={{
          className: `bg-addbutton ${
            project.name.length == 0 ? "opacity-30 bg-addbutton" : "opacity-100"
          }`,
          disabled: project.name.length === 0,
        }}
      >
        <AddProject newProject={project} setNewProject={setProject} />
      </Modal>
    </div>
  );
};

export default ModelForProject;
