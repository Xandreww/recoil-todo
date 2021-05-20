import { Button, Input } from "@theme-ui/components";
import axios from "axios";
import React, { useState } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { tasksState } from "../recoil/atoms";
import { gorestApi, gorestApiPostHeaders, gorestUserId } from "../shared/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddNewTask.scss";

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
      <div className="add-task-header">
        <h2>Insert a new task:</h2>
        <Button onClick={addNewTask}>
          Add new task
          <FontAwesomeIcon className="plus" icon={faPlus} />
        </Button>
      </div>
      <Input
        placeholder="Task description"
        onKeyUp={handleKeyUp}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </>
  );
};

export default AddNewTask;
