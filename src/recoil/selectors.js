import axios from "axios";
import { selector } from "recoil";
import { gorestApi } from "../shared/constants";

export const getTodos = selector({
  key: "getTodos",
  get: async () => {
    const res = await axios.get(`${gorestApi}users/1627/todos`);
    return res.data.data;
  },
});
