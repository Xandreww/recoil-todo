import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import DeleteTask from "./DeleteTask/DeleteTask";
import TaskCheckbox from "./TaskCheckbox/TaskCheckbox";
import "./Task.scss";

const Task = ({ task }) => {
  return (
    <div className="task pattern-content">
      <div className="pattern-content-inner">
        <TaskCheckbox task={task} />
        <Link to={"/task/" + task.id} task={task}>
          {task.title}
        </Link>
      </div>
      <div className="task-icons">
        <Link to={"/task/" + task.id + "/edit"} task={task}>
          <FontAwesomeIcon icon={faEdit} className="edit-task" />
        </Link>
        <DeleteTask task={task} />
      </div>
    </div>
  );
};

export default Task;
