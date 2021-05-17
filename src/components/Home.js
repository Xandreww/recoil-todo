import { Container } from "@theme-ui/components";
import React from "react";
import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <>
      <Container p={4} bg="muted">
        <AddNewTask />
        <Tasks />
      </Container>
    </>
  );
};

export default Home;
