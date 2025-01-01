import React, { useState } from "react";
import hash from "../assets/hash.svg";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useActionState } from "react";
import MoreOptionsModel from "./MoreOptionsModel";
const IndividualProject = ({
  list,
  selectedProject = "none",
  setSelectedProject = () => {},
}) => {
  const [moreOptions, setMoreOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  function handleMoreOptions(e) {
    setMoreOptions(true);
    console.log(selectedProject, moreOptions);
  }
  function handleSelectedProject(id) {
    if (selectedProject != "none") {
      setSelectedProject(id);
    }
    // setMoreOptions(false);
    //console.log("the id is : ", id);
  }
  console.log(selectedProject, moreOptions, "this is the data");

  return (
    <div>
      <ul>
        {list
          .filter((element) => element.name != "Inbox")
          .map((element) => (
            <div
              key={element.id}
              onClick={() => handleSelectedProject(element.id)}
              className={`group  cursor-pointer flex justify-between items-baseline px-2 py-1 rounded-lg ${
                selectedProject === element.id
                  ? "bg-select_sidenav"
                  : "hover:bg-hover_sidenav"
              }`}
            >
              <div className="flex gap-x-2 items-center">
                <p className={`text-${element.color} text-lg`}># </p>
                <p
                  className={`${
                    selectedProject === element.id ? "text-red" : ""
                  }`}
                >
                  {element.name}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Dropdown
                  trigger={["click"]}
                  overlay={<MoreOptionsModel element={element} />}
                  placement="rightTop"
                >
                  <EllipsisOutlined />
                </Dropdown>
              </div>
            </div>
          ))}
      </ul>
      {/* {isModalVisible?(<MoreOptionsModel isModalVisible={isModalVisible} handleClose={handleClose}/>):(<></>)} */}
    </div>
  );
};

export default IndividualProject;
