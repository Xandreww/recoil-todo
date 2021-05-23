import React from "react";
import { useRecoilValue } from "recoil";
import { getFilteredTodos } from "../../../recoil/selectors";
import NoTasks from "./Task/NoTasks/NoTasks";
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
      {tasks && tasks.length > 0 && (
        <div className="tasks-paper">
          <div className="tasks-pattern">
            {tasks.map((task) => (
              <div className="task-content" key={task.id}>
                <Task task={task} />
              </div>
            ))}
          </div>
        </div>
      )}
      {(!tasks || tasks.length === 0) && <NoTasks />}
    </>
  );
};

export default Tasks;
