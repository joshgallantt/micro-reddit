import React from "react";
import { data } from "./data";
import "./Post.css";

export default function Post(props) {
  console.log(data);

  const preview = () => {
    if (data.data.children[0].data.secure_media !== null) {
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
      <div className="post-card">
        <h2>{data.data.children[0].data.title}</h2>
        <div className="post--container">
          <div className="post--container--votebar">
            <div className="up">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
              </svg>
            </div>
            <h3 className="score">
              {data.data.children[0].data.ups >= 1000
                ? Math.round((data.data.children[0].data.ups / 1000) * 10) /
                    10 +
                  "k"
                : data.data.children[0].data.ups}
            </h3>
            <div className="down">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
              </svg>
            </div>
          </div>
          <div className="post--container--content">
            <div>{preview()}</div>
            <div>{data.data.children[0].data.selftext}</div>
          </div>
        </div>
        <div className="post--container--content-bottominfo">
          <h4>{data.data.children[0].data.num_comments} comments</h4>
          <h4>Posted by u/{data.data.children[0].data.author}</h4>
        </div>
      </div>
    </div>
  );
}
