import React from "react";
import { useRef } from "react";
import MyVideo from "../assets/video/elenor.mp4";

const Video = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    console.log("play button clicked");

    const video = videoRef.current;
    console.log(video);

    if (video) {
      video
        .play()
        .then(() => {
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msrequestFullscreen) {
            video.msrequestFullscreen();
          }
        })
        .catch((err) => console.error("Erreur pendant la lecture :", err));
    }
  };

  return (
    <div className="video-section">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video"
          preload="auto"
          onError={() => console.error("Erreur lors du chargement de la vidéo")}
        >
          <source src={MyVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <button className="play-button" onClick={handlePlay} />
      </div>
    </div>
  );
};

export default Video;
