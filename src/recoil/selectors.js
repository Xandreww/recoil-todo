import axios from "axios";
import { selector } from "recoil";
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
