import { Container } from "@theme-ui/components";
import React from "react";
import AddNewTask from "./AddNewTask";
import SearchTask from "./SearchTask";
import TaskFilters from "./TaskFilters";
import Tasks from "./Tasks";
import TaskStas from "./TaskStas";
import Header from "./Header";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Container className="home" p={4} bg="muted">
        <div className="home-inner">
          <Header />
          <AddNewTask />
          <SearchTask />
          <TaskFilters />
          <Tasks />
          <TaskStas />
        </div>
      </Container>
    </>
  );
};

export default Home;
