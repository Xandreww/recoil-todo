import axios from "axios";
import { selector, selectorFamily } from "recoil";
import { gorestApi, gorestUserId } from "../shared/constants";
import { tasksFilterState, tasksState } from "./atoms";

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

export const getFilteredTodos = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(tasksFilterState);
    const list = get(tasksState);

    console.log("filter", filter);
    console.log("list", list);

    switch (filter) {
      case "Show Completed":
        return list.filter((todo) => todo.completed);
      case "Show Uncompleted":
        return list.filter((todo) => !todo.completed);
      default:
        return list;
    }
  },
});
