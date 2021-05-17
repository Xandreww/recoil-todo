import React from "react";
import { useRecoilValue } from "recoil";
import { tasksState } from "../recoil/atoms";
import DeleteTask from "./DeleteTask";
import TaskCheckbox from "./TaskCheckbox";

const Tasks = () => {
  const tasks = useRecoilValue(tasksState);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <TaskCheckbox task={task} />
          <p>{task.title}</p>
          <DeleteTask task={task} />
        </div>
      ))}
    </>
  );
};

export default Tasks;
