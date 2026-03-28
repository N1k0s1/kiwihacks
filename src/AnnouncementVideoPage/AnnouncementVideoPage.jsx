import "./AnnouncementVideoPage.css";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AnnouncementVideo from "../Video/assests/announcement.mp4";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }

  const totalSeconds = Math.floor(seconds);
  const mins = Math.floor(totalSeconds / 60);
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function AnnouncementVideoPage() {
  const videoRef = useRef(null);
  const hideControlsTimerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const onWebkitFullscreenBegin = () => {
      setIsFullscreen(true);
    };

    const onWebkitFullscreenEnd = () => {
      setIsFullscreen(false);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    video.addEventListener("webkitbeginfullscreen", onWebkitFullscreenBegin);
    video.addEventListener("webkitendfullscreen", onWebkitFullscreenEnd);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      video.removeEventListener("webkitbeginfullscreen", onWebkitFullscreenBegin);
      video.removeEventListener("webkitendfullscreen", onWebkitFullscreenEnd);
    };
  }, []);

  useEffect(() => {
    hideControlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 2200);

    return () => {
      if (hideControlsTimerRef.current) {
        window.clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = isMuted;
  }, [isMuted]);

  const scheduleControlsHide = () => {
    if (hideControlsTimerRef.current) {
      window.clearTimeout(hideControlsTimerRef.current);
    }

    hideControlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 2200);
  };

  const revealControls = () => {
    setControlsVisible(true);
    scheduleControlsHide();
  };

  const hideControlsNow = () => {
    if (hideControlsTimerRef.current) {
      window.clearTimeout(hideControlsTimerRef.current);
    }
    setControlsVisible(false);
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    revealControls();

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    revealControls();
  };

  const handleSeek = (event) => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const nextTime = Number(event.target.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    revealControls();
  };

  const toggleFullscreen = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    revealControls();

    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        try {
          await document.exitFullscreen();
        } catch {
          // Ignore fullscreen exit failures and keep current state.
        }
      }
      return;
    }

    if (video.requestFullscreen) {
      try {
        await video.requestFullscreen();
      } catch {
        // Ignore fullscreen request failures and try iOS fallback below.
      }
    }

    if (video.webkitEnterFullscreen) {
      try {
        video.webkitEnterFullscreen();
      } catch {
        // Ignore iOS fullscreen fallback failures.
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="announcement-mobile-page">
        <section className="announcement-mobile-card">
          <h1>Announcement</h1>

          <div
            className="announcement-mobile-player"
            onMouseMove={revealControls}
            onMouseEnter={revealControls}
            onMouseLeave={hideControlsNow}
            onTouchStart={revealControls}
            onFocusCapture={revealControls}
          >
            <video
              ref={videoRef}
              className="announcement-mobile-video"
              src={AnnouncementVideo}
              autoPlay
              muted={isMuted}
              playsInline
              preload="metadata"
            />

            <div className={`announcement-mobile-controls announcement-video__controls ${controlsVisible ? "is-visible" : ""}`}>
              <div className="announcement-video__control-row">
                <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause video" : "Play video"}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button type="button" onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
                  {isMuted ? "Unmute" : "Mute"}
                </button>
                <button
                  type="button"
                  className="announcement-video__fullscreen-button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
              </div>

              <div className="announcement-video__timeline">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={Math.min(currentTime, duration || 0)}
                  onInput={handleSeek}
                  onChange={handleSeek}
                  aria-label="Video timeline"
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <a className="announcement-mobile-back" href="/">
            Back to Home
          </a>
        </section>
      </main>
    </>
  );
}
