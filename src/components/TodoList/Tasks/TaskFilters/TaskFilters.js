import { Select } from "@theme-ui/components";
import React from "react";
import { useRecoilState } from "recoil";
import { tasksFilterState } from "../../../../recoil/atoms";

const TaskFilters = () => {
  const [filter, setFilter] = useRecoilState(tasksFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Select value={filter} onChange={updateFilter}>
      <option value="Show All">Show All</option>
      <option value="Show Completed">Show Completed</option>
      <option value="Show Uncompleted">Show Uncompleted</option>
    </Select>
  );
};

export default TaskFilters;
