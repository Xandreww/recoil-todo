import { Progress } from "@theme-ui/components";
import React from "react";
import { useRecoilValue } from "recoil";
import { getTodosState } from "../recoil/selectors";

const TaskStas = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, totalCharacters } = useRecoilValue(getTodosState);

  return (
    <>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Completed: {totalCompletedNum} </li>
        <li>Uncompleted: {totalUncompletedNum}</li>
        <li>Total characters used: {totalCharacters}</li>
      </ul>
      <div>
        <h2>Completed tasks progress: </h2>
        <Progress max={1} value={totalCompletedNum / totalNum}></Progress>
      </div>
    </>
  );
};

export default TaskStas;
