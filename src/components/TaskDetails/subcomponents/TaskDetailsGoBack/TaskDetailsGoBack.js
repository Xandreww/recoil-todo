import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../TaskDetails.scss";

const TaskDetailsGoBack = () => {
  return (
    <Link to="/" className="link-back">
      <FontAwesomeIcon className="mr-10" icon={faArrowLeft} />
      go back to task list
    </Link>
  );
};

export default TaskDetailsGoBack;
