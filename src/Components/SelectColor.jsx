import React from "react";
import colorOptions from "./colors";
import { Flex, Input, Typography, Select } from "antd";

const SelectColor = ({ handleColorChange, updatedColor }) => {
  return (
    <div className="">
      <Typography.Title level={5}>Color</Typography.Title>
      <Select
        value={updatedColor}
        onChange={handleColorChange}
        className="w-full"
      >
        {colorOptions.map((element) => (
          <Select.Option value={element.color} key={element.color}>
            <div className="flex gap-x-2 items-center">
              <div className={`w-3 h-3 bg-${element.color} rounded-full`}></div>
              <p> {element.value}</p>
            </div>
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectColor;