import React, { useRef, useEffect, useCallback } from "react";
import MyVideo from "../assets/video/elenor.mp4";

const Video = () => {
  const videoRef = useRef(null);

  const enterFullscreen = (video) => {
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .then(() => enterFullscreen(video))
      .catch((err) => console.error("Erreur pendant la lecture :", err));
  }, []);

  const handleFullscreenChange = useCallback(() => {
    const video = videoRef.current;
    if (!document.fullscreenElement && video) {
      video.pause();
      // Si tu veux que la vidéo se remette à zéro quand tu enlève le plein écran
      // video.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

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
