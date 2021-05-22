import React from "react";
import { Container } from "@theme-ui/components";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getTodo } from "../../recoil/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../shared/functions";
import "./TaskDetails.scss";

const TaskDetails = ({ match }) => {
  const todo = useRecoilValue(getTodo(match.params.id));

  return (
    <Container p={4} bg="muted" className="task-details">
      <div className="task-details-inner">
        <Link to="/" className="link-back">
          <FontAwesomeIcon className="mr-10" icon={faArrowLeft} />
          go back to task list
        </Link>

        <div className="task-details-header">
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
          <div className="create-dates">
            <p>Created at: {formatDate(todo.created_at)}</p>
            <p>Updated at: {formatDate(todo.updated_at)}</p>
          </div>
        </div>

        <h2 className="task-details-text">{todo.title}</h2>
      </div>
    </Container>
  );
};

export default TaskDetails;
