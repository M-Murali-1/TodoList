import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import IndividualProject from "./IndividualProject";
import { filterData } from "./apiOperations";
const { Search } = Input;
const MyProjects = ({ data }) => {
  console.log("rerendering..! the component after this time");
  const [searchText, setSearchText] = useState("");
  function handleSearch(e) {
    let value = e.target.value;
    setSearchText(value);
  }
  let searchData = data;
  if(searchText!="") {
    searchData= data.filter(element=>element.name.toLowerCase().includes(searchText.toLowerCase()))
    
  }
  console.log(searchData,"after filtering");
  
  console.log(searchText,"this is the cotent");

  return (
    <div className="flex flex-col m-5">
      <div>
        <p className="text-2xl font-bold mb-2">My Projects</p>
        <Input
          placeholder="Search Projects"
          size="middle"
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="m-3">
        <p className="font-semibold">{searchData.length} Projects</p>
        <IndividualProject list={searchData} />
      </div>
    </div>
  );
};

export default MyProjects;
