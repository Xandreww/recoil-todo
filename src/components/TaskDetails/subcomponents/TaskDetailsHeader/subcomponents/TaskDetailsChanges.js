import React from "react";
import { useHistory } from "react-router";
import { gorestApi, gorestApiPostHeaders } from "../../../../../shared/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../../TaskDetails.scss";

const TaskDetailsChanges = ({ inputValue, todo, updateTaskDetailsView }) => {
  const config = {
    headers: gorestApiPostHeaders,
  };
  const history = useHistory();

  const saveChanges = () => {
    if (inputValue === todo.title) {
      exitEditMode();
      return;
    }

    patchTaskTitle();
    updateTaskDetailsView();
    exitEditMode();
  };

  const patchTaskTitle = async () => {
    try {
      const payload = {
        title: inputValue,
      };

      await axios.patch(`${gorestApi}todos/${todo.id}`, payload, config);
    } catch (err) {
      console.error(err);
    }
  };

  const exitEditMode = () => {
    history.push("/task/" + todo.id);
  };

  return (
    <div className="task-changes">
      <div onClick={saveChanges} className="save-changes">
        <FontAwesomeIcon className="mr-10" icon={faCheckSquare} /> save changes
        <span className="divider">|</span>
      </div>
      <div onClick={() => exitEditMode()} className="discard-changes">
        <FontAwesomeIcon className="mr-10" icon={faWindowClose} /> cancel
      </div>
    </div>
  );
};

export default TaskDetailsChanges;
