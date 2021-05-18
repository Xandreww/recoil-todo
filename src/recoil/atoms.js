import { atom } from "recoil";
import { getTodos } from "./selectors";

export const tasksState = atom({
  key: "tasksState",
  default: getTodos,
});

export const tasksFilterState = atom({
  key: "tasksFilterState",
  default: "Show All",
});

export const searchTaskState = atom({
  key: "searchTaskState",
  default: "",
});
