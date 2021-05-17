import { atom } from "recoil";
import { getTodos } from "./selectors";

export const tasksState = atom({
  key: "tasksState",
  default: getTodos,
});
