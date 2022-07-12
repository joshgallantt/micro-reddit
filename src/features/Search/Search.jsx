import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubreddits, setSearch, setFilter } from "./searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subreddits.data);
  const searchParam = useSelector((state) => state.subreddits.searchParam);
  const filtered = useSelector((state) => state.subreddits.filtered);

  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => setFocused(false);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  useEffect(() => {
    if (data !== undefined) {
      dispatch(
        setFilter(
          data.filter((sub) => sub.data.url.toLowerCase().includes(searchParam))
        )
      );
    }
  }, [searchParam]);

  return (
    <div className="search">
      <div className="header--searchbox">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          value={searchParam}
          onFocus={onFocus}
          onBlur={onBlur}
        ></input>
      </div>
      <ul
        className={
          focused === true ? "search--results" : "search--results hidden"
        }
      >
        {filtered.map((item) => (
          <li key={item.data.id}>{item.data.url}</li>
        ))}
      </ul>
    </div>
  );
}
