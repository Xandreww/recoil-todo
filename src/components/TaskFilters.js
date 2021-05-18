import { Select } from "@theme-ui/components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchTaskState, tasksFilterState } from "../recoil/atoms";

const TaskFilters = () => {
  const [filter, setFilter] = useRecoilState(tasksFilterState);
  const searchValue = useRecoilValue(searchTaskState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  useEffect(() => {
    searchValue && setFilter("Show Filtered");
  }, [searchValue, setFilter]);

  return (
    <Select value={filter} onChange={updateFilter}>
      <option value="Show All">Show All</option>
      <option value="Show Completed">Show Completed</option>
      <option value="Show Uncompleted">Show Uncompleted</option>
    </Select>
  );
};

export default TaskFilters;
