import { Close } from "@theme-ui/components";
import axios from "axios";
import React from "react";
import { useRecoilCallback } from "recoil";
import { tasksState } from "../recoil/atoms";
import { gorestApi, gorestApiPostHeaders, gorestUserId } from "../shared/constants";

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

  return <Close onClick={deleteTodo} />;
};

export default DeleteTask;
