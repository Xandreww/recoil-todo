import { Container } from "@theme-ui/components";
import React from "react";
import AddNewTask from "./AddNewTask";
import TaskFilters from "./TaskFilters";
import Tasks from "./Tasks";
import TaskStas from "./TaskStas";

const Home = () => {
  return (
    <>
      <Container p={4} bg="muted">
        <TaskStas />
        <AddNewTask />
        <TaskFilters />
        <Tasks />
      </Container>
    </>
  );
};

export default Home;
