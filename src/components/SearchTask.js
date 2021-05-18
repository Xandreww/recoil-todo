import { Input } from "@theme-ui/components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useSetRecoilState } from "recoil";
import { searchTaskState } from "../recoil/atoms";

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
    <>
      <Input placeholder="Search for task" onChange={handleSearch} value={searchValue} />
    </>
  );
};

export default SearchTask;
