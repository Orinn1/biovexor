'use client';

import React, { useState } from 'react';

export default function SplashScreen({ onEnter }) {
  const [isEntered, setIsEntered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    if (isEntered) return;
    setIsEntered(true);
    if (onEnter) onEnter();

    setTimeout(() => {
      setIsVisible(false);
    }, 600);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`splash-screen ${isEntered ? 'hidden' : ''}`}
      onClick={handleEnter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleEnter();
      }}
      aria-label="Click anywhere to enter website"
    >
      <span className="splash-tag">[ click anywhere to enter ]</span>
    </div>
  );
}
