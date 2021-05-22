import axios from "axios";
import React from "react";
import { useRecoilCallback } from "recoil";
import { tasksState } from "../recoil/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gorestApi, gorestApiPostHeaders, gorestUserId } from "../shared/constants";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./DeleteTask.scss";

const DeleteTask = ({ task }) => {
  const deleteTodo = useRecoilCallback(({ set }) => async () => {
    try {
      const config = {
        headers: gorestApiPostHeaders,
      };

      axios.delete(`${gorestApi}todos/${task.id}`, config).then(async () => {
        try {
          const res = await axios.get(`${gorestApi}users/${gorestUserId}/todos`);
          set(tasksState, res.data.data);
        } catch (err) {
          console.error(err);
        }
      });
    } catch (err) {
      console.error(err);
    }
  });

  return <FontAwesomeIcon nClick={deleteTodo} className="delete-task" icon={faTrashAlt} />;
};

export default DeleteTask;
