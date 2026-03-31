import React, { useEffect, useRef, useState } from "react";
import "./AnnouncementVideoPage.css";
import AnnouncementVideo from "../assests/announcement.mp4";

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
  const [showUnmute, setShowUnmute] = useState(false);
  
  // Custom Controls State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const hideControlsTimerRef = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(true);

  const scheduleControlsHide = () => {
    if (hideControlsTimerRef.current) {
      window.clearTimeout(hideControlsTimerRef.current);
    }
    hideControlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 2500);
  };

  const revealControls = () => {
    setControlsVisible(true);
    scheduleControlsHide();
  };

  useEffect(() => {
    scheduleControlsHide();
    return () => {
      if (hideControlsTimerRef.current) {
        window.clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    // Initial Try Auto-Play
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setIsMuted(true);
        setShowUnmute(true);
        video.play().catch(e => console.error(e));
      });
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
      video.currentTime = 0;
      setCurrentTime(0);
      setShowUnmute(false);
      revealControls();
    }
  };

  const togglePlayback = () => {
    revealControls();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    revealControls();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
    if (showUnmute) setShowUnmute(false);
  };

  const handleSeek = (e) => {
    revealControls();
    const video = videoRef.current;
    if (!video) return;
    const nextTime = Number(e.target.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div 
      className="mobile-video-page-container"
      onClick={revealControls}
      onMouseMove={revealControls}
      onTouchStart={revealControls}
    >
      <div className={`mobile-video-header ${controlsVisible ? "is-visible" : ""}`}>
        <a href="/" className="kiwi-button kiwi-button-small">
          &larr; Back
        </a>
      </div>
      
      <video
        ref={videoRef}
        className="mobile-announce-video"
        src={AnnouncementVideo}
        playsInline
        loop
        onClick={togglePlayback}
      />

      {showUnmute && (
        <button className="kiwi-button kiwi-button-big unmute-overlay" onClick={handleUnmute}>
          🔊 Tap to Unmute
        </button>
      )}

      {/* Custom Controls */}
      <div className={`mobile-video-controls ${controlsVisible && !showUnmute ? "is-visible" : ""}`}>
        <div className="mobile-video-control-row">
          <button type="button" className="kiwi-button kiwi-button-light" onClick={togglePlayback}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button type="button" className="kiwi-button kiwi-button-light" onClick={toggleMute}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>

        <div className="mobile-video-timeline">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
