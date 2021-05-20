import { Progress } from "@theme-ui/components";
import React from "react";
import { useRecoilValue } from "recoil";
import { getTodosState } from "../recoil/selectors";
import "./TaskStats.scss";

const TaskStas = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, totalCharacters } = useRecoilValue(getTodosState);

  return (
    <div className="task-stats">
      <div className="task-stats-inner">
        <div className="first-row">
          <p>{totalNum} tasks</p>
          <p>{totalCompletedNum} complete</p>
          <p>{totalUncompletedNum} open</p>
        </div>
        <div>
          <Progress max={1} value={totalNum ? totalCompletedNum / totalNum : 0}></Progress>
        </div>
        <div className="total-characters">
          <p>{totalCharacters} total characters used</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStas;
