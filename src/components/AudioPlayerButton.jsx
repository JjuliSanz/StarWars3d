import React, { useState, useRef, useEffect } from "react";

const AudioPlayerButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0;
    audioRef.current.play();
  }, [])

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 0.3;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={playPauseHandler} className="audio">
        {isPlaying ? (
          // MUTE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-pause"
            viewBox="0 0 16 16"
          >
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
          </svg>
        ) : (
          // PLAY
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src="/Star_Wars_Main_Theme.mp3" loop/>
    </div>
  );
};

export default AudioPlayerButton;
