import React, { useEffect, useState, useRef } from "react";
import "./Video.css";

const Video = () => {
  const [isFullScreen, setFullScreen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullScreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    // Mute the video when not in fullscreen
    if (!isFullScreen && videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [isFullScreen]);

  const fullscreen = () => {
    setFullScreen(true);
    videoRef.current.muted = false;

    // Request fullscreen
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const smallScreen = () => {
    setFullScreen(false);
    videoRef.current.muted = true;

    // Exit fullscreen if currently in fullscreen mode
    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  return (
    <div className="vido">
      <div className="vdointernal">
        <video
          ref={videoRef}
          src={process.env.PUBLIC_URL + "/Assets/dm v.mp4"}
          height="100%"
          width="100%"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div
        id="mute"
        className={`mute ${isFullScreen ? "hidden" : ""}`}
        onClick={fullscreen}
      >
        <i class="fa-solid fa-volume-xmark"></i>
      </div>
    </div>
  );
};

export default Video;
