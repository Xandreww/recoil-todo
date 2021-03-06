import React from "react";
import axios from "axios";
import { Checkbox, Label } from "@theme-ui/components";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { removeItemAtIndex } from "../../../../../shared/functions";
import { tasksState } from "../../../../../recoil/atoms";
import { gorestApi, gorestApiPostHeaders } from "../../../../../shared/constants";

const TaskCheckbox = ({ task }) => {
  const tasks = useRecoilValue(tasksState);
  const index = tasks.findIndex((listItem) => listItem === task);

  const toggleItemCompletion = useRecoilCallback(({ set }) => async () => {
    try {
      const config = {
        headers: gorestApiPostHeaders,
      };

      const payload = {
        completed: !task.completed,
      };

      axios.patch(`${gorestApi}todos/${task.id}`, payload, config).then((res) => {
        const newList = removeItemAtIndex(tasks, index);
        newList.push(res.data.data);

        set(tasksState, newList);
      });
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <Label>
      <Checkbox checked={task.completed} onChange={toggleItemCompletion} />
    </Label>
  );
};

export default TaskCheckbox;
