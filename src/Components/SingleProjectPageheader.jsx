import React from "react";
import { Link } from "react-router-dom";
const SingleProjectPageheader = ({ handleMyProjects }) => {
  return (
    <div className="m-5">
      <span
        onClick={handleMyProjects}
        className="font-semibold hover:bg-hover_sidenav p-2 rounded mt-5"
      >
        <Link to={"/myprojects"}>My Projects </Link>
      </span>
    </div>
  );
};

export default SingleProjectPageheader;
