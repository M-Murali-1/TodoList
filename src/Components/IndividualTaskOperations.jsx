import React from "react";
import { Radio,Checkbox } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
const IndividualTaskOperations = ({ element }) => {
    function handleEdit() {
        console.log("Clicked on the eedit button");
        
    }
    function handleMoreOptions() {
        console.log("Hanle More options")
    }
  return (
    <div className="flex justify-between group ">
      <Radio key={element.id} className="rounded-full">
        <div className="p-2">
          <h2>{element.content}</h2>
          <h1>{element.description}</h1>
        </div>
      </Radio>
      <div className="flex gap-5 text-lg opacity-0 group-hover:opacity-100 cursor-pointer">
        <EditOutlined onClick={handleEdit}/>
        <EllipsisOutlined onClick={handleMoreOptions}/>
      </div>
    </div>
  );
};

export default IndividualTaskOperations;
