(() => {
  const mediaQuery = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 768px)",
  );

  let audioEl = null;
  let buttonEl = null;
  let attentionTimer = null;

  const tryPlay = async () => {
    if (!audioEl) {
      return;
    }

    try {
      await audioEl.play();
      if (buttonEl) {
        buttonEl.textContent = "Mute";
        buttonEl.setAttribute("aria-pressed", "false");
      }
    } catch (error) {
      console.warn("Ambient audio failed to play.", error);
    }
  };

  const stopAttention = () => {
    if (!buttonEl) {
      return;
    }

    buttonEl.classList.remove("mute-toggle--attention");
  };

  const startAttention = () => {
    if (!buttonEl) {
      return;
    }

    buttonEl.classList.add("mute-toggle--attention");

    if (attentionTimer) {
      window.clearTimeout(attentionTimer);
    }

    attentionTimer = window.setTimeout(stopAttention, 30000);
  };

  const teardown = () => {
    if (audioEl) {
      audioEl.pause();
      audioEl.remove();
      audioEl = null;
    }

    if (buttonEl) {
      buttonEl.remove();
      buttonEl = null;
    }

    if (attentionTimer) {
      window.clearTimeout(attentionTimer);
      attentionTimer = null;
    }
  };

  const bindGesturePlay = () => {
    const events = ["pointerdown", "keydown", "touchstart"];

    const handleGesture = () => {
      if (!audioEl) {
        return;
      }

      audioEl.muted = false;
      void tryPlay();
      events.forEach((eventName) => {
        window.removeEventListener(eventName, handleGesture);
      });
    };

    events.forEach((eventName) => {
      window.addEventListener(eventName, handleGesture, { once: true });
    });
  };

  const setup = () => {
    if (!mediaQuery.matches) {
      teardown();
      return;
    }

    if (audioEl || buttonEl) {
      return;
    }

    audioEl = document.createElement("audio");
    audioEl.src =
      "https://cdn.jsdelivr.net/gh/N1k0s1/kiwihacks@main/public/nz-forest.mp3";
    audioEl.preload = "auto";
    audioEl.loop = true;
    audioEl.autoplay = true;
    audioEl.muted = true;
      audioEl.volume = 0.1;
    audioEl.setAttribute("aria-hidden", "true");
    audioEl.dataset.ambientAudio = "true";
    audioEl.addEventListener("error", () => {
      console.warn("Ambient audio failed to load.");
    });
    document.body.appendChild(audioEl);

    buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.className = "mute-toggle";
    buttonEl.textContent = "Tap to play sound";
    buttonEl.setAttribute("aria-pressed", "true");

    buttonEl.addEventListener("click", async () => {
      if (!audioEl) {
        return;
      }

      if (audioEl.muted) {
        audioEl.muted = false;
        await tryPlay();
      } else {
        audioEl.muted = true;
        buttonEl.textContent = "Tap to play sound";
        buttonEl.setAttribute("aria-pressed", "true");
      }
    });

    document.body.appendChild(buttonEl);
    startAttention();
    bindGesturePlay();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }

  mediaQuery.addEventListener("change", setup);
})();
