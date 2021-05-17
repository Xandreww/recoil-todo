import { Button, Container, Input } from "@theme-ui/components";
import React from "react";
import Tasks from "./Tasks";

const Home = () => {
  const addNewTask = () => {
    console.log("add new task");
  };

  return (
    <>
      <Container p={4} bg="muted">
        <div>
          <Input defaultValue="Insert a new task" />
          <Button onClick={addNewTask}>Add new task</Button>
        </div>
        <Tasks />
      </Container>
    </>
  );
};

export default Home;
