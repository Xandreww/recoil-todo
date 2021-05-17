import { Button, Input } from "@theme-ui/components";
import axios from "axios";
import React, { useState } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { tasksState } from "../recoil/atoms";
import { gorestApi, gorestApiPostHeaders, gorestUserId } from "../shared/constants";

const AddNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const tasks = useRecoilValue(tasksState);

  const addNewTask = useRecoilCallback(({ set }) => async () => {
    try {
      const config = {
        headers: gorestApiPostHeaders,
      };

      const payload = {
        title: inputValue,
        completed: false,
      };

      axios.post(`${gorestApi}users/${gorestUserId}/todos`, payload, config).then((res) => {
        set(tasksState, [...tasks, res.data.data]);
      });
    } catch (err) {
      console.error(err);
    }
  });

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <>
      <Input placeholder="Insert a new task" onKeyUp={handleKeyUp} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <Button onClick={addNewTask}>Add new task</Button>
    </>
  );
};

export default AddNewTask;
