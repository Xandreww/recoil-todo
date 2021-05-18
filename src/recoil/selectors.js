import axios from "axios";
import { selector, selectorFamily } from "recoil";
import { gorestApi, gorestUserId } from "../shared/constants";
import { searchTaskState, tasksFilterState, tasksState } from "./atoms";

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
  key: "getTodo",
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
  key: "getFilteredTodos",
  get: ({ get }) => {
    const filter = get(tasksFilterState);
    const searchValue = get(searchTaskState);
    let list = get(tasksState);

    console.log("searchValue", searchValue);

    if (searchValue) {
      list = list.filter((todo) => todo.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

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

export const getTodosState = selector({
  key: "getTodosState",
  get: ({ get }) => {
    const todos = get(tasksState);
    const totalNum = todos.length;
    const totalCompletedNum = todos.filter((todo) => todo.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const totalCharacters = todos.reduce((acc, todo) => acc + todo.title.length, 0);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      totalCharacters,
    };
  },
});
