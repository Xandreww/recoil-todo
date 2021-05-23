import React from "react";
import { useSetRecoilState } from "recoil";
import { forceTodoUpdate } from "../../../../recoil/atoms";
import { gorestApi, gorestApiPostHeaders } from "../../../../shared/constants";
import TaskDetailsCompleted from "./subcomponents/TaskDetailsCompleted";
import TaskDetailsUncompleted from "./subcomponents/TaskDetailsUncompleted";
import TaskDetailsChanges from "./subcomponents/TaskDetailsChanges";
import TaskDetailsEditTodo from "./subcomponents/TaskDetailsEditTodo";
import TaskDetailsCreateDates from "./subcomponents/TaskDetailsCreateDates";
import axios from "axios";
import "../../TaskDetails.scss";

const TaskDetailsHeader = ({ todo, isEditMode, inputValue }) => {
  const todoUpdates = useSetRecoilState(forceTodoUpdate);
  const config = {
    headers: gorestApiPostHeaders,
  };

  const updateTaskDetailsView = () => todoUpdates((n) => n + 1);

  const patchTaskCompletion = async () => {
    try {
      const payload = {
        completed: !todo.completed,
      };

      await axios.patch(`${gorestApi}todos/${todo.id}`, payload, config);
      updateTaskDetailsView();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="task-details-header">
      <div className="task-details-icons">
        <div>
          {todo.completed ? (
            <TaskDetailsCompleted isEditMode={isEditMode} patchTaskCompletion={patchTaskCompletion} />
          ) : (
            <TaskDetailsUncompleted isEditMode={isEditMode} patchTaskCompletion={patchTaskCompletion} />
          )}
        </div>
        <div>
          {isEditMode ? (
            <TaskDetailsChanges todo={todo} inputValue={inputValue} updateTaskDetailsView={updateTaskDetailsView} />
          ) : (
            <TaskDetailsEditTodo todo={todo} />
          )}
        </div>
      </div>
      <TaskDetailsCreateDates todo={todo} />
    </div>
  );
};

export default TaskDetailsHeader;
