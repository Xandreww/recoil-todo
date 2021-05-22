import React from "react";
import { useRecoilValue } from "recoil";
import { getFilteredTodos } from "../../../recoil/selectors";
import Task from "./Task/Task";
import TaskFilters from "./TaskFilters/TaskFilters";
import "./Tasks.scss";

const Tasks = () => {
  const tasks = useRecoilValue(getFilteredTodos);

  return (
    <>
      <div className="tasks-header">
        <h1>Tasks</h1>
        <TaskFilters />
      </div>
      <div className="tasks-paper">
        <div className="tasks-pattern">
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task) => (
              <div id="content">
                <Task key={task.id} task={task} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
