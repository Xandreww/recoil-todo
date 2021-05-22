import { Container, Spinner } from "@theme-ui/components";
import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <Container p={4} bg="muted" className="loading">
      <Spinner className="spinner" size={200} />
    </Container>
  );
};

export default Loading;
