import React from "react";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../TaskDetails.scss";

const TaskDetailsUncompleted = ({ isEditMode, patchTaskCompletion }) => {
  return (
    <div className="todo-completed-state">
      <FontAwesomeIcon className="not-completed mr-10" icon={faTimesCircle} /> not yet completed
      {isEditMode && (
        <div className="task-completion-container">
          <span className="divider">|</span>
          <div className="manage-task-completion" onClick={patchTaskCompletion}>
            <FontAwesomeIcon className="completed mr-10" icon={faCheckCircle} onClick={patchTaskCompletion} /> complete
            task
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetailsUncompleted;
