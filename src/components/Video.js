import React from "react";
import ReactPlayer from "react-player";
import MyVideo from "../assets/video/test.mp4";

const Video = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        {/* <ReactPlayer url={MyVideo} playing controls className="react-player" /> */}
        <video src={MyVideo} controls />
      </div>
      <div className="text-container">
        <h2>Voir ma vidéo</h2>
        <p>
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which
        </p>
        <div className="play-icon"></div>
      </div>
    </div>
  );
};

export default Video;
