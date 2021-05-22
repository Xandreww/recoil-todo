import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "@theme-ui/components";
import { useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchTaskState } from "../../../recoil/atoms";
import debounce from "lodash.debounce";
import "./SearchTask.scss";

const SearchTask = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const setSearchTaskValue = useSetRecoilState(searchTaskState);

  const debouncedSearch = useMemo(
    () =>
      debounce((inputValue) => {
        setDebouncedValue(inputValue);
      }, 1000),
    [setDebouncedValue]
  );

  const handleSearch = useCallback(
    (e) => {
      const value = e.target.value;

      if (value) {
        setSearchValue(value);
        debouncedSearch(value);
      } else {
        setSearchValue("");
        debouncedSearch("");
        setSearchTaskValue("");
      }
    },
    [debouncedSearch, setSearchTaskValue]
  );

  useEffect(() => {
    debouncedValue && setSearchTaskValue(debouncedValue);
  }, [debouncedValue, setSearchTaskValue]);

  return (
    <div className="search-task input-container">
      <Input placeholder="Search for tasks" onChange={handleSearch} value={searchValue} />
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};

export default SearchTask;
