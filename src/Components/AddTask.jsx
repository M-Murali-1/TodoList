import React, { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import AddIndividualTask from "./AddIndividualTask";
const AddTask = ({ data,selectedProject }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div
        className={`flex gap-3 cursor-pointer p-2 rounded-lg text-addbutton hover:bg-hover_sidenav`}
        onClick={showModal}
      >
        <PlusCircleFilled className="text-lg" />
        <p>Add Task</p>
      </div>
      {isModalVisible && (
        <Modal
          title={null}
          open={isModalVisible}
          onCancel={closeModal}
          footer={null}
          closable={false}
        >
          <AddIndividualTask projects={data} onCancel={closeModal} selectedProject={selectedProject}/>
        </Modal>
      )}
    </>
  );
};

export default AddTask;
