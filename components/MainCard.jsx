'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Play, Code, ShoppingCart, BookOpen, Star, Sparkles, Zap, Shield, Flame, Activity } from 'lucide-react';
import TiltCard from './TiltCard';
import {
  ScriptHubIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  DiscordIcon,
} from './SocialIcons';

const ICON_MAP = {
  Play: Play,
  Code: Code,
  ShoppingCart: ShoppingCart,
  BookOpen: BookOpen,
  Star: Star,
  Sparkles: Sparkles,
  Zap: Zap,
  Shield: Shield,
  Flame: Flame,
  Activity: Activity,
};

export default function MainCard({ profile, onShowToast }) {
  const [typedName, setTypedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = profile?.username || 'Vexor';

  useEffect(() => {
    let timeout;
    const currentLength = typedName.length;

    if (!isDeleting && currentLength < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, currentLength + 1));
      }, 140);
    } else if (!isDeleting && currentLength === fullName.length) {
      // Pause at full name
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && currentLength > 0) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, currentLength - 1));
      }, 80);
    } else if (isDeleting && currentLength === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting, fullName]);

  const handleDiscordClick = (e, url) => {
    e.preventDefault();
    const discordName = profile?.username || 'Vexor';
    navigator.clipboard?.writeText(discordName).then(() => {
      if (onShowToast) onShowToast(`Copied Discord: ${discordName}`);
    }).catch(() => {
      if (onShowToast) onShowToast(`Discord: ${discordName}`);
    });

    if (url) {
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 400);
    }
  };

  return (
    <TiltCard className="main-profile-card">
      {/* Top Row: Avatar on Left */}
      <div className="main-card-top-row">
        <div className="avatar-wrapper">
          <img
            src={profile.avatar || '/assets/main-avatar.png'}
            alt={profile.username || 'Profile Avatar'}
            className="avatar-img"
          />
        </div>
      </div>

      {/* Username Heading with Blinking Cursor */}
      <h1 className="username-heading">
        <span>{typedName}</span>
        <span className="typing-cursor">|</span>
      </h1>

      {/* Bio Paragraph */}
      <p className="bio-paragraph">
        I'm Content <span className="bio-bold">Creator and Developer</span>
      </p>

      {/* Languages Row */}
      <div className="languages-row">
        <span className="lang-prefix">{profile.bioLanguages?.prefix || '// Language: '}</span>
        <span className="lang-highlight">{profile.bioLanguages?.highlight || 'NextJs'}</span>
        <span style={{ color: '#94a3b8' }}>,</span>
        <span className="lang-others">{profile.bioLanguages?.others || 'Go, Rust, Lua'}</span>
      </div>

      {/* Badges / Pills Row */}
      <div className="badges-scroll-row">
        {profile.badges?.map((badge) => {
          const IconComp = ICON_MAP[badge.icon] || Sparkles;
          return (
            <a
              key={badge.id}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-capsule"
            >
              <IconComp size={12} style={{ color: '#38bdf8' }} />
              <span>{badge.text}</span>
            </a>
          );
        })}
      </div>

      {/* Inset Social Dock Capsule */}
      <div className="social-capsule-dock">
        {profile.socialDock?.map((item) => {
          let btnClass = '';
          let IconComponent = null;

          switch (item.type) {
            case 'scripthub':
              btnClass = 'btn-scripthub';
              IconComponent = ScriptHubIcon;
              break;
            case 'facebook':
              btnClass = 'btn-facebook';
              IconComponent = FacebookIcon;
              break;
            case 'instagram':
              btnClass = 'btn-instagram';
              IconComponent = InstagramIcon;
              break;
            case 'tiktok':
              btnClass = 'btn-tiktok';
              IconComponent = TikTokIcon;
              break;
            case 'youtube':
              btnClass = 'btn-youtube';
              IconComponent = YouTubeIcon;
              break;
            case 'discord':
              btnClass = 'btn-discord';
              IconComponent = DiscordIcon;
              break;
            default:
              btnClass = 'btn-scripthub';
              IconComponent = ScriptHubIcon;
          }

          if (item.type === 'discord') {
            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleDiscordClick(e, item.url)}
                className={`social-circle-btn ${btnClass}`}
                title="Discord (Click to copy tag & join)"
                aria-label="Discord"
              >
                <IconComponent size={19} />
              </a>
            );
          }

          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-circle-btn ${btnClass}`}
              title={item.title || item.name}
              aria-label={item.name}
            >
              <IconComponent size={19} />
            </a>
          );
        })}
      </div>
    </TiltCard>
  );
}
