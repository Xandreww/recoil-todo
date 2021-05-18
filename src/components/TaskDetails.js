import { Container } from "@theme-ui/components";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getTodo } from "../recoil/selectors";

const TaskDetails = ({ match }) => {
  const todo = useRecoilValue(getTodo(match.params.id));
  console.log("todo", todo);

  return (
    <Container p={4} bg="muted">
      <Link to="/">Go back</Link>
      <h2>{todo.title}</h2>
      <div>{todo.completed ? "completed" : "not yet completed"}</div>
      <p>Created at: {todo.created_at}</p>
      <p>Updated at: {todo.updated_at}</p>
    </Container>
  );
};

export default TaskDetails;
