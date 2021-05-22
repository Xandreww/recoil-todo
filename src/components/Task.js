import React from "react";
import { Link } from "react-router-dom";
import DeleteTask from "./DeleteTask";
import TaskCheckbox from "./TaskCheckbox";
import "./Task.scss";

const Task = ({ task }) => {
  return (
    <div className="task pattern-content">
      <TaskCheckbox task={task} />
      <Link to={"/task/" + task.id} task={task} className="task-title">
        {task.title}
      </Link>
      <DeleteTask task={task} />
    </div>
  );
};

export default Task;
