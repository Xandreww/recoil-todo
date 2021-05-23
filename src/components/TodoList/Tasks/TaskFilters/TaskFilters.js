import { Select } from "@theme-ui/components";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksFilterState } from "../../../../recoil/atoms";
import { getTodosState } from "../../../../recoil/selectors";

const TaskFilters = () => {
  const [filter, setFilter] = useRecoilState(tasksFilterState);
  const { totalNum } = useRecoilValue(getTodosState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      {totalNum > 0 && (
        <Select value={filter} onChange={updateFilter}>
          <option value="Show All">Show All</option>
          <option value="Show Completed">Show Completed</option>
          <option value="Show Uncompleted">Show Uncompleted</option>
        </Select>
      )}
    </>
  );
};

export default TaskFilters;
