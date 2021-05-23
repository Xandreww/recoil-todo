import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../../TaskDetails.scss";

const TaskDetailsEditTodo = ({ todo }) => {
  return (
    <Link to={"/task/" + todo.id + "/edit"} task={todo} className="edit-todo">
      <FontAwesomeIcon className="mr-10" icon={faEdit} />
      edit todo
    </Link>
  );
};

export default TaskDetailsEditTodo;
