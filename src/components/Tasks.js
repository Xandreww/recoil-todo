import { Checkbox, Label } from "@theme-ui/components";
import React from "react";
import { useRecoilValue } from "recoil";
import { tasksState } from "../recoil/atoms";

const Tasks = () => {
  const tasks = useRecoilValue(tasksState);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <Label>
            <Checkbox defaultChecked={true} checked={task.completed} />
          </Label>
          <p>{task.title}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
