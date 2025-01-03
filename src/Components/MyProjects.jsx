import { useState } from "react";
import { Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import IndividualProject from "./IndividualProjectOperations";
import ModelForProject from "./ModelForProject";
const MyProjects = ({ data }) => {
  const initial = { name: "", isFavorite: false, color: "charcoal" };
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  function handleSearch(e) {
    let value = e.target.value;
    setSearchText(value);
  }
  let searchData = data;
  if (searchText != "") {
    searchData = data.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col m-5 gap-3 w-5/6 ">
        <p className=" text-2xl font-bold mb-2 ">My Projects</p>
        <Input
          placeholder="Search Projects"
          size="middle"
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
        />
        <div className="text-right ">
          <PlusOutlined
            className="hover:bg-hover_sidenav p-2 rounded cursor-pointer"
            onClick={showModal}
          />
        </div>

        <p className="font-semibold">{searchData.length} Projects</p>
        <hr />
        <IndividualProject list={searchData} />
      </div>
      <ModelForProject
        title={"Add Project"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        initial={initial}
        okButtonText={"Add"}
      />
    </div>
  );
};

export default MyProjects;
