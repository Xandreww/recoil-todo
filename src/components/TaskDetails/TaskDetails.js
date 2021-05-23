import React, { useState } from "react";
import { Container, Input } from "@theme-ui/components";
import { useRecoilValue } from "recoil";
import { getTodo } from "../../recoil/selectors";
import TaskDetailsGoBack from "./subcomponents/TaskDetailsGoBack/TaskDetailsGoBack";
import TaskDetailsHeader from "./subcomponents/TaskDetailsHeader/TaskDetailsHeader";
import "./TaskDetails.scss";

const TaskDetails = ({ match }) => {
  const todo = useRecoilValue(getTodo(match.params.id));
  const [inputValue, setInputValue] = useState(todo.title);
  const url = match.url;
  const isEditMode = url.includes("edit");

  return (
    <Container p={4} bg="muted" className="task-details">
      <div className="task-details-inner">
        <TaskDetailsGoBack />

        <TaskDetailsHeader todo={todo} isEditMode={isEditMode} inputValue={inputValue} />

        {isEditMode ? (
          <Input
            className="task-details-input"
            placeholder="Task description"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        ) : (
          <h2 className="task-details-text">{todo.title}</h2>
        )}
      </div>
    </Container>
  );
};

export default TaskDetails;
