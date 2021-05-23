import React from "react";
import { formatDate } from "../../../../../shared/functions";
import "../../../TaskDetails.scss";

const TaskDetailsCreateDates = ({ todo }) => {
  return (
    <div className="create-dates">
      <p>Created at: {formatDate(todo.created_at)}</p>
      <p>Updated at: {formatDate(todo.updated_at)}</p>
    </div>
  );
};

export default TaskDetailsCreateDates;
