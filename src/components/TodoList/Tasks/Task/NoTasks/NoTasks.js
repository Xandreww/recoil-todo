import React from "react";
import "./NoTasks.scss";

const NoTasks = () => {
  return (
    <div className="tasks-paper no-tasks">
      <h2 className="add-tasks">Add some tasks</h2>
      <iframe
        className="add-tasks-giph"
        src="https://giphy.com/embed/3o7aD78EiPBtmCvvtm"
        title="write somethind down"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default NoTasks;
