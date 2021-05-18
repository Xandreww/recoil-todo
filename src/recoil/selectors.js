import axios from "axios";
import { selector, selectorFamily } from "recoil";
import { gorestApi, gorestUserId } from "../shared/constants";

export const getTodos = selector({
  key: "getTodos",
  get: async () => {
    try {
      const res = await axios.get(`${gorestApi}users/${gorestUserId}/todos`);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
});

export const getTodo = selectorFamily({
  key: "UserName",

  get: (todoId) => async () => {
    try {
      const res = await axios.get(`${gorestApi}todos/${todoId}`);
      return res.data.data;
    } catch (err) {
      console.error(err);
      return;
    }
  },
});
