import { Container } from "@theme-ui/components";
import React from "react";
import AddNewTask from "./AddNewTask/AddNewTask";
import SearchTask from "./SearchTask/SearchTask";
import Tasks from "./Tasks/Tasks";
import TaskStas from "./TaskStas/TaskStas";
import Header from "./Header/Header";
import "./TodoList.scss";

const Home = () => {
  return (
    <>
      <Container className="home" p={4} bg="muted">
        <div className="home-inner">
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

export default Home;
