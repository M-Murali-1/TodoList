import { useContext } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import MoreOptionsModel from "./MoreOptionsModelProjects";
import { useNavigate } from "react-router-dom";
import StateContext from "./StateChangeContext";
import { findFavourites } from "./apiOperations";
const IndividualProject = ({type=""}) => {
  const navigate = useNavigate();

  const {projectDispatch,projectState } = useContext(StateContext);
  
  let data = (type=="favourites")?findFavourites(projectState.projects):projectState.projects;
  function handleSelectedProject(element) {
    projectDispatch({type:"UPDATE_SELECTED",payload:element.id})
    navigate(`/myprojects/${element.id}`);
  }

  return (
    <div>
      <ul>
        {data
          .filter((element) => element.name != "Inbox")
          .map((element) => (
            <div
              key={element.id}
              onClick={() => handleSelectedProject(element)}
              className={`group  cursor-pointer flex justify-between items-baseline px-2 py-1 rounded-lg ${
                projectState.selectedProject === element.id
                  ? "bg-select_sidenav"
                  : "hover:bg-hover_sidenav"
              }`}
            >
              <div className="flex gap-x-2 items-center">
                <p className={`text-${element.color} text-lg`}># </p>
                <p
                  className={`${
                    projectState.selectedProject === element.id ? "text-red" : ""
                  }`}
                >
                  {element.name}
                </p>
              </div>
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
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
    </div>
  );
};

export default IndividualProject;
