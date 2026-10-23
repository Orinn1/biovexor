'use client';

import React, { useState, useRef } from 'react';
import { BIO_CONFIG } from '@/data/bioConfig';
import AmbientBeams from '@/components/AmbientBeams';
import StarsBackground from '@/components/StarsBackground';
import SplashScreen from '@/components/SplashScreen';
import FloatingAudio from '@/components/FloatingAudio';
import MainCard from '@/components/MainCard';
import ModularCard from '@/components/ModularCard';
import Toast from '@/components/Toast';

export default function BioPage() {
  const [toastMessage, setToastMessage] = useState('');
  const audioPlayerRef = useRef(null);

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleSplashEnter = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.startPlaying();
    }
  };

  return (
    <main className="bio-wrapper">
      {/* 1. Splash Screen ([ click anywhere to enter ]) */}
      <SplashScreen onEnter={handleSplashEnter} />

      {/* 2. Ambient Diagonal Light Rays & Multi-Layer Parallax Starfield */}
      <AmbientBeams />
      <StarsBackground
        speed={21}
        factor={0.71}
        starColor="#ffffff"
        transition={{ stiffness: 122, damping: 81 }}
      />

      {/* 3. Floating Audio Pill (Top-Left) */}
      <FloatingAudio ref={audioPlayerRef} musicConfig={BIO_CONFIG.music} />

      {/* 4. Slat.cc Style Bio Card Stack */}
      <div className="bio-stack-container">
        {/* Main Profile Card (Avatar, Username, Languages, Badges, Social Dock) */}
        <MainCard profile={BIO_CONFIG.profile} onShowToast={handleShowToast} />

        {/* Modular Cards Stack (Discord, Roblox Profiles, GitHub) */}
        {BIO_CONFIG.cards?.map((card) => (
          <ModularCard key={card.id} card={card} onShowToast={handleShowToast} />
        ))}
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </main>
  );
}
