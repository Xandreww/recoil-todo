import { Container } from "@theme-ui/components";
import React from "react";
import AddNewTask from "./AddNewTask/AddNewTask";
import SearchTask from "./SearchTask/SearchTask";
import Tasks from "./Tasks/Tasks";
import TaskStas from "./TaskStas/TaskStas";
import Header from "./Header/Header";
import { useRecoilValue } from "recoil";
import { getTodosState } from "../../recoil/selectors";
import "./TodoList.scss";

const TodoList = () => {
  const { totalNum } = useRecoilValue(getTodosState);

  return (
    <>
      <Container className={totalNum ? "todo-list" : "todo-list no-todos"} p={4} bg="muted">
        <div className="todo-list-inner">
          <Header />
          <AddNewTask />
          <SearchTask />
          <Tasks />
          <TaskStas />
        </div>
      </Container>
    </>
  );
};

export default TodoList;
