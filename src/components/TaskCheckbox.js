import { Checkbox, Label } from "@theme-ui/components";
import axios from "axios";
import React from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { tasksState } from "../recoil/atoms";
import { gorestApi, gorestApiPostHeaders } from "../shared/constants";
import { removeItemAtIndex } from "../shared/functions";

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
