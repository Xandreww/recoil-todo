import React from "react";
import DeleteTask from "./DeleteTask";
import TaskCheckbox from "./TaskCheckbox";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { getFilteredTodos } from "../recoil/selectors";
import TaskFilters from "./TaskFilters";
import "./Tasks.scss";

const Tasks = () => {
  const tasks = useRecoilValue(getFilteredTodos);

  return (
    <>
      <div className="tasks-header">
        <h1>Tasks</h1>
        <TaskFilters />
      </div>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.id} className="task">
            <TaskCheckbox task={task} />
            <Link to={"/task/" + task.id} task={task}>
              {task.title}
            </Link>
            <DeleteTask task={task} />
          </div>
        ))}
    </>
  );
};

export default Tasks;
