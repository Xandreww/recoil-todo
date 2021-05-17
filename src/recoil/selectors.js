import axios from "axios";
import { selector } from "recoil";
import { gorestApi, gorestUserId } from "../shared/constants";

export const getTodos = selector({
  key: "getTodos",
  get: async () => {
    const res = await axios.get(`${gorestApi}users/${gorestUserId}/todos`);
    return res.data.data;
  },
});
