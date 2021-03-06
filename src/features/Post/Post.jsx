import React from "react";
import "./Post.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Post(props) {
  const currentSub = useSelector((state) => state.currentSub.currentSub);
  const [vote, setVote] = useState("");
  const [score, setScore] = useState(props.data.ups);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    if (
      event.currentTarget.classList.value.includes("up") &&
      !event.currentTarget.classList.value.includes("green")
    ) {
      setVote("up");
      setScore(props.data.ups + 1);
    }
    if (
      event.currentTarget.classList.value.includes("down") &&
      !event.currentTarget.classList.value.includes("orange")
    ) {
      setVote("down");
      setScore(props.data.ups - 1);
    }
    if (
      event.currentTarget.classList.value.includes("green") ||
      event.currentTarget.classList.value.includes("orange")
    ) {
      setVote("");
      setScore(props.data.ups);
    }
  };
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
  // console.log(props.data);
  function displayVideo(src) {
    return (
      <video
        loop={true}
        autoPlay="autoplay"
        controls="controls"
        id="vid"
        muted
        playsInline
        className="preview"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  function displayImage(src) {
    return <img className="preview" src={src} alt="thumb" />;
  }

  // function displayIframe(src) {
  //   return (
  //     <iframe
  //       src="https://www.redditmedia.com/mediaembed/vxctmq"
  //       frameborder="0"
  //       allowfullscreen="true"
  //       scrolling="no"
  //       height="378"
  //       width="620"
  //     ></iframe>
  //   );
  // }

  function displayGif(src) {
    return (
      <video
        loop={true}
        autoPlay="autoplay"
        controls={false}
        id="vid"
        muted
        playsInline
        className="preview"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  function displayText(src) {
    const textPreview = src.slice(0, 600);

    if (!props.details) {
      return (
        <div className="post--content--text">
          {textPreview} +{" "}
          <Link to={`/posts${props.data.permalink}`}>
            <div className="post--content--readmore">
              <br />
              ...Read More
            </div>
          </Link>
        </div>
      );
    } else {
      return <div className="post--content--text">{src}</div>;
    }
  }

  const preview = () => {
    if (props.data.domain === "gfycat.com") {
      return displayGif(props.data.preview.reddit_video_preview.fallback_url);
    }

    if (props.data.post_hint === "image") {
      return displayImage(props.data.url);
    }

    if (props.data.selftext) {
      return displayText(props.data.selftext);
    }
    if (props.data.is_video) {
      try {
        return displayVideo(props.data.secure_media.reddit_video.fallback_url);
      } catch (error) {}
    }
    if (props.data.domain === "clips.twitch.tv") {
      try {
        return displayImage(props.data.media.oembed.thumbnail_url);
      } catch (error) {}
    }
  };

  return (
    <div className="post">
      <div className="post--sub">
        {currentSub === "/r/all/" ? (
          <Link to={`${props.data.subreddit_name_prefixed}/`}>
            <h5>{props.data.subreddit_name_prefixed}</h5>
          </Link>
        ) : null}
      </div>
      <Link to={`/posts${props.data.permalink}`}>
        <div className="post--title">{props.data.title}</div>
      </Link>
      <div className="post--content">{preview()}</div>
      <div>
        <div className="post--info">
          <div className="post--info--score">
            <div
              className={
                vote === "up"
                  ? "post--info--score--up green"
                  : "post--info--score--up"
              }
              onClick={handleClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
              </svg>
            </div>
            <h3 className="post--info--score--value">
              {score >= 1000
                ? Math.round((score / 1000) * 10) / 10 + "k"
                : score}
            </h3>
            <div
              className={
                vote === "down"
                  ? "post--info--score--down orange"
                  : "post--info--score--down"
              }
              onClick={handleClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
              </svg>
            </div>
          </div>
          {!props.details && (
            <Link
              className="post--info--comment"
              to={`/posts${props.data.permalink}`}
            >
              <div className="post--info--comment">
                <div className="post--info--comment--count">
                  {props.data.num_comments}
                </div>
                <div className="post--info--comment--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                  </svg>
                </div>
              </div>
            </Link>
          )}
          <div>
            <Link
              className="post--info--author"
              to={`/posts${props.data.permalink}`}
            >
              <div className="post--info--author">
                <p>
                  posted {timeSince(props.data.created)} ago by
                  <br />
                  <span className="post--info-author--prop">
                    u/{props.data.author}
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
