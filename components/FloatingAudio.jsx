'use client';

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const FloatingAudio = forwardRef(function FloatingAudio({ musicConfig }, ref) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    startPlaying: () => {
      if (audioRef.current && musicConfig?.enabled) {
        audioRef.current.volume = typeof musicConfig?.volume === 'number' ? musicConfig.volume : 0.5;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Audio autoplay waiting for user interaction:', err);
            setIsPlaying(false);
          });
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = typeof musicConfig?.volume === 'number' ? musicConfig.volume : 0.5;
    }
  }, [musicConfig]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  if (!musicConfig?.enabled) return null;

  return (
    <>
      {/* Background Audio Element */}
      <audio
        ref={audioRef}
        src={musicConfig.src}
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Floating Audio Pill Widget (Only rendered if showPill is true) */}
      {musicConfig.showPill && (
        <div
          className={`floating-audio-pill ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          title={isPlaying ? 'Pause music' : 'Play music'}
          role="button"
          tabIndex={0}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}

          <div className="sound-waves" aria-hidden="true">
            <span className="sound-bar bar-1" />
            <span className="sound-bar bar-2" />
            <span className="sound-bar bar-3" />
            <span className="sound-bar bar-4" />
          </div>

          <span className="audio-track-label">{musicConfig.title || 'Audio'}</span>

          <button
            type="button"
            onClick={toggleMute}
            style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex' }}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}
    </>
  );
});

export default FloatingAudio;
