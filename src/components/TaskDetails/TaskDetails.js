import React, { useEffect, useState } from "react";
import { Container, Input } from "@theme-ui/components";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getTodo } from "../../recoil/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheckCircle,
  faCheckSquare,
  faEdit,
  faTimesCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../shared/functions";
import { useHistory } from "react-router-dom";
import { gorestApi, gorestApiPostHeaders } from "../../shared/constants";
import axios from "axios";
import "./TaskDetails.scss";
import { forceTodoUpdate } from "../../recoil/atoms";

const TaskDetails = ({ match }) => {
  const todo = useRecoilValue(getTodo(match.params.id));
  const todoUpdates = useSetRecoilState(forceTodoUpdate);
  const [inputValue, setInputValue] = useState(todo.title);
  const url = match.url;
  const isEditMode = url.includes("edit");
  const history = useHistory();
  const config = {
    headers: gorestApiPostHeaders,
  };

  const forceUpdate = () => todoUpdates((n) => n + 1);

  const saveChanges = () => {
    if (inputValue === todo.title) {
      exitEditMode();
      return;
    }

    patchTaskTitle();
    forceUpdate();
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

  useEffect(() => {}, [inputValue]);

  return (
    <Container p={4} bg="muted" className="task-details">
      <div className="task-details-inner">
        <Link to="/" className="link-back">
          <FontAwesomeIcon className="mr-10" icon={faArrowLeft} />
          go back to task list
        </Link>

        <div className="task-details-header">
          <div className="task-details-icons">
            <div>
              {todo.completed ? (
                <>
                  <FontAwesomeIcon className="completed mr-10" icon={faCheckCircle} /> completed
                </>
              ) : (
                <>
                  <FontAwesomeIcon className="not-completed mr-10" icon={faTimesCircle} /> not yet completed
                </>
              )}
            </div>
            <div>
              {isEditMode ? (
                <>
                  <div className="task-changes">
                    <div onClick={saveChanges} className="save-changes">
                      <FontAwesomeIcon className="mr-10" icon={faCheckSquare} /> save changes
                      <span className="divider">|</span>
                    </div>
                    <div onClick={() => exitEditMode()} className="discard-changes">
                      <FontAwesomeIcon className="mr-10" icon={faWindowClose} /> cancel
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to={"/task/" + todo.id + "/edit"} task={todo} className="edit-todo">
                    <FontAwesomeIcon className="mr-10" icon={faEdit} /> edit todo
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="create-dates">
            <p>Created at: {formatDate(todo.created_at)}</p>
            <p>Updated at: {formatDate(todo.updated_at)}</p>
          </div>
        </div>

        {isEditMode ? (
          <>
            <Input
              className="task-details-input"
              placeholder="Task description"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </>
        ) : (
          <>
            <h2 className="task-details-text">{todo.title}</h2>
          </>
        )}
      </div>
    </Container>
  );
};

export default TaskDetails;
