import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubreddits, setSearch, setFilter } from "./searchSlice";
import "./Search.css";
import { Link } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subreddits.data);
  const searchParam = useSelector((state) => state.subreddits.searchParam);
  const filtered = useSelector((state) => state.subreddits.filtered);

  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

  // get list of subreddits
  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  //after getting list of subreddits, get a filtered list and alter it when typing
  useEffect(() => {
    if (data !== undefined) {
      dispatch(
        setFilter(
          data.filter((sub) => sub.data.url.toLowerCase().includes(searchParam))
        )
      );
    }
  }, [data, searchParam]);

  return (
    <div className="search">
      <div className="header--searchbox">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          value={searchParam}
          onClick={onFocus}
          onBlur={() => {
            setTimeout(onBlur, 400);
          }}
        ></input>
      </div>
      <ul
        className={
          focused === true ? "search--results" : "search--results hidden"
        }
      >
        {filtered.map((item) => (
          <li key={item.data.id} onClick={onBlur}>
            <Link className="link" to={item.data.url.toLowerCase()}>
              {item.data.url}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
