import React from "react";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../TaskDetails.scss";

const TaskDetailsCompleted = ({ isEditMode, patchTaskCompletion }) => {
  return (
    <div className="todo-completed-state">
      <FontAwesomeIcon className="completed mr-10" icon={faCheckCircle} /> completed
      {isEditMode && (
        <div className="task-completion-container">
          <span className="divider">|</span>
          <div className="manage-task-completion" onClick={patchTaskCompletion}>
            <FontAwesomeIcon className="uncomplete mr-10" icon={faTimesCircle} /> uncomplete task
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetailsCompleted;
