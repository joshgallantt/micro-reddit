import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

export default function Search() {
  // const filter = useSelector((state) => state.filterSelection.filter);
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => setFocused(false);

  useEffect(() => {
    const fetchSubreddits = async () => {
      const result = await axios("https://www.reddit.com/subreddits.json");
      setData(result.data.data.children);
    };

    function filteredResults() {
      const filteredArray = data.filter((sub) =>
        sub.data.url.toLowerCase().includes(searchParam)
      );
      setFilteredList(filteredArray);
    }

    fetchSubreddits();
    filteredResults();
    const onFocus = () => {
      if (searchParam !== "") {
        setFocused(true);
      }
    };
    const onBlur = () => setFocused(false);
  }, [searchParam]);

  return (
    <div className="search">
      <div className="header--searchbox">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
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
        {filteredList.map((item) => (
          <li key={item.data.id}>{item.data.url}</li>
        ))}
      </ul>
    </div>
  );
}
