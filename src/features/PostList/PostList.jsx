import React from "react";
import "./PostList.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { changeSub } from "../../appSlice";
import Post from "../Post/Post";
import axios from "axios";

export default function PostList() {
  const dispatch = useDispatch();
  const currentSub = useSelector((state) => state.currentSub.currentSub);
  const filter = useSelector((state) => state.filterSelection.filter);
  let location = useLocation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (location.pathname !== "/") {
      dispatch(changeSub(location.pathname));
    }

    const fetchData = async () => {
      const result = await axios(
        `https://www.reddit.com${location.pathname + filter}.json`
      );

      setLoading(false);
      setPosts(result.data.data.children);
    };

    fetchData();
  }, [location, filter]);

  function loadingCheck() {
    console.log(loading);
    if (loading) {
      return (
        <ul className="postList">
          <div className="loader"></div>
        </ul>
      );
    }
    return (
      <ul className="postList">
        {posts.map((post) => (
          <li className="postList--posts" key={post.data.id}>
            <Post data={post.data}></Post>
          </li>
        ))}
      </ul>
    );
  }

  return loadingCheck();
}
