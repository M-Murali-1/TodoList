import React, { useState } from "react";
import { Flex, Input, Typography, Select, Switch } from "antd";
import colorOptions from "./colors";
import SelectColor from "./SelectColor";
const AddProject = ({newProject,setNewProject}) => {
  // const [newProject, setNewProject] = useState({
  //   name: "",
  //   isFavorite: false,
  //   color: "charcoal",
  // });
  function handleNameChange(e) {
    setNewProject({ ...newProject, name: e.target.value });
    console.log(newProject);
  }
  function handleColorChange(value) {
    setNewProject({ ...newProject, color: value });
    // console.log(newProject);
    console.log("changed the color", value);
  }
  function handleFavourite() {
    setNewProject({ ...newProject, isFavorite: !newProject.isFavorite });
  }
  return (
    <div>
      <div>
        <Typography.Title level={5}>Name</Typography.Title>
        <Input
          value={newProject.name}
          onChange={handleNameChange}
          maxLength={120}
        />
        <div className="text-right mt-2">
          {newProject.name.length} / {120}
        </div>
      </div>
      {/* For defining the colors present */}
      <SelectColor
        handleColorChange={handleColorChange}
        updatedColor={newProject.color}
      />
      <div className="flex gap-x-5 mt-5 items-center">
        <Switch size="small" value={newProject.isFavorite} onChange={handleFavourite} />
        <p>
        Add to favorites</p>
      </div>
    </div>
  );
};

export default AddProject;
