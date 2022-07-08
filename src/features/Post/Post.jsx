import React from "react";
import { data } from "./data";
import "./Post.css";

export default function Post() {
  console.log(data);

  const preview = () => {
    if (data.data.children[10].data.secure_media !== null) {
      return (
        <video controls className="preview">
          <source
            src={
              data.data.children[0].data.secure_media.reddit_video.fallback_url
            }
            type="video/mp4"
          />
        </video>
      );
    } else if (data.data.children[5].data.url != null) {
      return (
        <img
          className="preview"
          src={data.data.children[5].data.url}
          alt="thumb"
        />
      );
    }
  };

  return (
    <div className="post">
      <div className="post--container">
        <div className="post--container--votebar">
          <div className="upvotes">{data.data.children[0].data.ups}</div>
        </div>

        <div className="post--container--content">
          <div className="post--container--content-title">
            {data.data.children[0].data.title}
          </div>
          <div>{preview()}</div>
          <div>{data.data.children[0].data.selftext}</div>
          <div className="post--container--content-bottominfo">
            <div>{data.data.children[0].data.subreddit_name_prefixed}</div>
            <div>{data.data.children[0].data.num_comments} comments</div>
            <div>{data.data.children[0].data.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
