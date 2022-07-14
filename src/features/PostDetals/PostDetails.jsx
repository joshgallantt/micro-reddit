import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./PostDetails.css";

export default function PostDetails() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function timeSince(date) {
    var seconds = Math.floor((new Date().getTime() - date * 1000) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const result = await axios(
        `https://www.reddit.com/r/${params.sub}/comments/${params.postId}/${params.name}.json`
      );

      setLoading(false);
      setData(result.data);
    };

    fetchData();
  }, []);

  function loadingCheck() {
    if (loading) {
      return (
        <ul className="postList">
          <div className="loader"></div>
        </ul>
      );
    }
    return (
      <div className="detailed-post">
        <Post data={data[0].data.children[0].data} details={true} />
        <h3 className="comment--heading">
          Comments ({data[1].data.children.length})
        </h3>
        <ul className="comments">
          {data[1].data.children.slice(0, -1).map((comment) => (
            <li className="comment" key={comment.data.id}>
              <div className="comment--title">
                <div>{comment.data.author}</div>
                <div>{timeSince(comment.data.created)} ago</div>
              </div>
              <div className="comment--body">{comment.data.body}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return loadingCheck();
}
