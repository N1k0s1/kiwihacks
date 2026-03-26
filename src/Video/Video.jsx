import { useEffect, useMemo, useRef, useState } from "react";
import "./Video.css";

function formatTime(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) {
		return "0:00";
	}

	const totalSeconds = Math.floor(seconds);
	const mins = Math.floor(totalSeconds / 60);
	const secs = String(totalSeconds % 60).padStart(2, "0");
	return `${mins}:${secs}`;
}

export default function AnnouncementVideoPlayer({
	src,
	title = "Announcement",
	poster,
	autoPlay = false,
	defaultMuted = true,
	loop = false,
	desktopMinWidth = 768,
	mobilePageHref = "/announcement",
	mobileBannerText = "Watch update",
}) {
	const videoRef = useRef(null);
	const hideControlsTimerRef = useRef(null);
	const closeTimerRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const [isMuted, setIsMuted] = useState(defaultMuted);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [controlsVisible, setControlsVisible] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);
	const closeAnimationMs = 320;

	const mediaQuery = useMemo(
		() => `(min-width: ${desktopMinWidth}px)`,
		[desktopMinWidth],
	);

	useEffect(() => {
		const mql = window.matchMedia(mediaQuery);

		const handleChange = () => {
			setIsDesktop(mql.matches);
		};

		handleChange();

		if (mql.addEventListener) {
			mql.addEventListener("change", handleChange);
			return () => mql.removeEventListener("change", handleChange);
		}

		mql.addListener(handleChange);
		return () => mql.removeListener(handleChange);
	}, [mediaQuery]);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) {
			return undefined;
		}

		const syncFromVideo = () => {
			setDuration(video.duration || 0);
			setCurrentTime(video.currentTime || 0);
			setIsPlaying(!video.paused);
		};

		const onLoadedMetadata = () => {
			setDuration(video.duration || 0);
		};

		const onTimeUpdate = () => {
			setCurrentTime(video.currentTime || 0);
		};

		const onPlay = () => setIsPlaying(true);
		const onPause = () => setIsPlaying(false);

		video.addEventListener("loadedmetadata", onLoadedMetadata);
		video.addEventListener("timeupdate", onTimeUpdate);
		video.addEventListener("play", onPlay);
		video.addEventListener("pause", onPause);
		syncFromVideo();

		return () => {
			video.removeEventListener("loadedmetadata", onLoadedMetadata);
			video.removeEventListener("timeupdate", onTimeUpdate);
			video.removeEventListener("play", onPlay);
			video.removeEventListener("pause", onPause);
		};
	}, [isDesktop, isMinimized]);

	useEffect(() => {
		return () => {
			if (hideControlsTimerRef.current) {
				window.clearTimeout(hideControlsTimerRef.current);
			}
			if (closeTimerRef.current) {
				window.clearTimeout(closeTimerRef.current);
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

	useEffect(() => {
		const shouldLockPageScroll = isDesktop && isExpanded && !isMinimized && !isClosing;
		document.body.classList.toggle("announcement-video-scroll-locked", shouldLockPageScroll);

		return () => {
			document.body.classList.remove("announcement-video-scroll-locked");
		};
	}, [isDesktop, isExpanded, isMinimized, isClosing]);

	if (!src) {
		return null;
	}

	if (!isDesktop) {
		return (
			<a className="announcement-video__mobile-banner" href={mobilePageHref} aria-label="Open announcement video page">
				<span>{title}</span>
				<strong>{mobileBannerText}</strong>
			</a>
		);
	}

	const scheduleControlsHide = () => {
		if (isClosing || isMinimized) {
			return;
		}

		if (hideControlsTimerRef.current) {
			window.clearTimeout(hideControlsTimerRef.current);
		}

		hideControlsTimerRef.current = window.setTimeout(() => {
			setControlsVisible(false);
		}, 2200);
	};

	const revealControls = () => {
		if (isClosing || isMinimized) {
			return;
		}

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
		revealControls();
		setIsMuted((prev) => !prev);
	};

	const toggleExpand = () => {
		revealControls();
		setIsExpanded((prev) => !prev);
	};

	const handleBackdropClick = () => {
		if (!isExpanded || isMinimized || isClosing) {
			return;
		}

		setIsExpanded(false);
		hideControlsNow();
	};

	const handleClose = () => {
		const video = videoRef.current;
		if (!video) {
			return;
		}

		if (isClosing || isMinimized) {
			return;
		}

		video.pause();
		video.currentTime = 0;
		setCurrentTime(0);
		setIsPlaying(false);
		hideControlsNow();
		setIsClosing(true);

		if (closeTimerRef.current) {
			window.clearTimeout(closeTimerRef.current);
		}

		closeTimerRef.current = window.setTimeout(() => {
			setIsClosing(false);
			setIsExpanded(false);
			setIsMinimized(true);
		}, closeAnimationMs);
	};

	const handleUnminimize = async () => {
		setIsMinimized(false);
		revealControls();

		if (!autoPlay) {
			return;
		}

		const video = videoRef.current;
		if (!video) {
			return;
		}

		try {
			await video.play();
		} catch {
			setIsPlaying(false);
		}
	};

	const handleSeek = (event) => {
		const video = videoRef.current;
		if (!video) {
			return;
		}

		revealControls();

		const nextTime = Number(event.target.value);
		video.currentTime = nextTime;
		setCurrentTime(nextTime);
	};

	return (
		<>
			<div
				className={`announcement-video__backdrop ${isExpanded && !isMinimized && !isClosing ? "is-active" : ""}`}
				onClick={handleBackdropClick}
				aria-hidden="true"
			/>
			{isMinimized ? (
				<button
					type="button"
					className="announcement-video__tab"
					onClick={handleUnminimize}
					aria-label="Reopen announcement video"
				>
					<span>{title}</span>
					<span>Open</span>
				</button>
			) : (
				<section
					className={`announcement-video ${isExpanded ? "is-expanded" : ""} ${isClosing ? "is-closing" : ""}`}
					onMouseMove={revealControls}
					onMouseEnter={revealControls}
					onMouseLeave={hideControlsNow}
					onFocusCapture={revealControls}
					aria-label="Announcement video"
				>
			<video
				ref={videoRef}
				className="announcement-video__media"
				src={src}
				poster={poster}
				autoPlay={autoPlay}
				muted={defaultMuted}
				playsInline
				loop={loop}
				preload="metadata"
			/>

			<div
				className={`announcement-video__overlay announcement-video__header ${controlsVisible ? "is-visible" : ""}`}
				onMouseEnter={revealControls}
				onMouseMove={revealControls}
				onFocusCapture={revealControls}
			>
				<p>{title}</p>
				<div className="announcement-video__frame-actions">
					<button
						type="button"
						onClick={toggleExpand}
						aria-label={isExpanded ? "Minimize video" : "Maximize video"}
					>
						{isExpanded ? "Minimize" : "Maximize"}
					</button>
					<button type="button" onClick={handleClose} aria-label="Close and stop video">
						Close
					</button>
				</div>
			</div>

			<div
				className={`announcement-video__overlay announcement-video__controls ${controlsVisible ? "is-visible" : ""}`}
				onMouseEnter={revealControls}
				onMouseMove={revealControls}
				onFocusCapture={revealControls}
			>
				<div className="announcement-video__control-row">
					<button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause video" : "Play video"}>
						{isPlaying ? "Pause" : "Play"}
					</button>
					<button type="button" onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
						{isMuted ? "Unmute" : "Mute"}
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
				</section>
			)}
		</>
	);
}
