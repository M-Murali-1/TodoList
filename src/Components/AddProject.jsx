import React from "react";
import SelectColor from "./SelectColor";
import { Input, Typography, Switch } from "antd";

const AddProject = ({ newProject, setNewProject }) => {
  //Handling the name change in the add and edit project.
  function handleNameChange(e) {
    setNewProject({ ...newProject, name: e.target.value });
  }

  //Handling the color change in the add and edit project.
  function handleColorChange(value) {
    setNewProject({ ...newProject, color: value });
  }

  //Handling the is favorite in the add and edit project.
  function handleFavorite() {
    setNewProject({ ...newProject, isFavorite: !newProject.isFavorite });
  }
  return (
    <>
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
        <Switch
          size="small"
          value={newProject.isFavorite}
          onChange={handleFavorite}
        />
        <p>Add to favorites</p>
      </div>
    </>
  );
};

export default AddProject;
