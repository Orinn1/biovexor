'use client';

import React, { useState, useEffect } from 'react';
import { Info, Clock } from 'lucide-react';
import TiltCard from './TiltCard';
import { RobloxIcon, GitHubIcon } from './SocialIcons';

function DiscordCard({ card }) {
  const [discordData, setDiscordData] = useState(null);

  useEffect(() => {
    let inviteCode = '6MTUP78KF6';
    if (card.url) {
      const match = card.url.match(/discord\.(?:gg|com\/invite)\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        inviteCode = match[1];
      }
    }

    fetch(`/api/discord?code=${inviteCode}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDiscordData(data);
        }
      })
      .catch((err) => {
        console.log('Error fetching Discord data:', err);
      });
  }, [card.url]);

  const formatCount = (count) => {
    if (typeof count !== 'number') return count;
    if (count >= 1000) {
      const formatted = (count / 1000).toFixed(1);
      return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'K' : formatted + 'K';
    }
    return count.toLocaleString();
  };

  // Live Discord avatar image, online members & total members
  const avatarSrc = discordData?.icon || card.avatar || '/assets/discord-icon.jpg';
  const displayTitle = discordData?.name || card.title;
  const onlineText = discordData?.onlineCount !== undefined ? formatCount(discordData.onlineCount) : card.onlineCount;
  const memberText = discordData?.memberCount !== undefined ? formatCount(discordData.memberCount) : card.memberCount;

  return (
    <TiltCard>
      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="modular-card"
      >
        <div className="card-content-left">
          <div className="modular-avatar-container">
            <img
              src={avatarSrc}
              alt={displayTitle}
              className="modular-avatar-img"
            />
          </div>

          <div className="card-text-group">
            <div className="card-title-row">
              <span>{displayTitle}</span>
            </div>

            <div className="card-stats-row">
              <span className="stat-green">●</span>
              <span className="stat-bold">{onlineText}</span>
              <span>online</span>
              <span className="stat-dot">●</span>
              <span className="stat-gray">○</span>
              <span className="stat-bold">{memberText}</span>
              <span>members</span>
            </div>
          </div>
        </div>

        <button type="button" className="join-btn">
          {card.buttonText || 'Join'}
        </button>
      </a>
    </TiltCard>
  );
}

export default function ModularCard({ card, onShowToast }) {
  if (card.type === 'discord') {
    return <DiscordCard card={card} />;
  }

  if (card.type === 'roblox') {
    return (
      <TiltCard>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="modular-card"
        >
          <div className="card-content-left">
            <div className="modular-avatar-container">
              <img
                src={card.avatar || '/assets/roblox-beanie.jpg'}
                alt={card.name}
                className="modular-avatar-img"
              />
              <span className="avatar-status-badge" />
            </div>

            <div className="card-text-group">
              <div className="card-title-row">
                <span>{card.name}</span>
              </div>

              <div className="roblox-handle-row">
                <RobloxIcon size={12} />
                <span>{card.handle}</span>
              </div>

              <div className="card-stats-row">
                <span className="stat-bold">{card.friends}</span>
                <span>Friends</span>
                <span className="stat-dot">•</span>
                <span className="stat-bold">{card.followers}</span>
                <span>Followers</span>
              </div>
            </div>
          </div>
        </a>
      </TiltCard>
    );
  }

  if (card.type === 'roblox-extended') {
    return (
      <TiltCard className="roblox-extended-card">
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <div className="extended-top-row">
            <div className="modular-avatar-container">
              <img
                src={card.avatar || '/assets/main-avatar.jpg'}
                alt={card.name}
                className="modular-avatar-img"
              />
              <span className="avatar-status-badge" />
            </div>

            <div className="card-text-group">
              <div className="card-title-row">
                <span>{card.name}</span>
              </div>

              <div className="roblox-handle-row">
                <RobloxIcon size={12} />
                <span>{card.handle}</span>
              </div>

              <div className="card-stats-row">
                <span className="stat-bold">{card.friends}</span>
                <span>Friends</span>
                <span className="stat-dot">•</span>
                <span className="stat-bold">{card.followers}</span>
                <span>Followers</span>
              </div>
            </div>
          </div>

          <div className="extended-about-section">
            <span className="about-label">About</span>
            <div className="about-quote-line">
              <Info size={13} style={{ color: '#94a3b8', flexShrink: 0 }} />
              <span>{card.aboutText}</span>
            </div>
            <div className="about-joined-line">
              <Clock size={12} style={{ color: '#64748b', flexShrink: 0 }} />
              <span>{card.joinedText}</span>
            </div>
          </div>
        </a>
      </TiltCard>
    );
  }

  if (card.type === 'github') {
    return (
      <TiltCard>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="modular-card"
        >
          <div className="card-content-left">
            <div className="modular-avatar-container">
              <img
                src={card.avatar}
                alt={card.name}
                className="modular-avatar-img"
              />
            </div>

            <div className="card-text-group">
              <div className="card-title-row">
                <span>{card.name}</span>
              </div>

              <div className="roblox-handle-row">
                <GitHubIcon size={12} />
                <span>{card.handle}</span>
              </div>

              <div className="card-stats-row">
                <span className="stat-bold">{card.followers}</span>
                <span>Followers</span>
                <span className="stat-dot">•</span>
                <span className="stat-bold">{card.following}</span>
                <span>Following</span>
                <span className="stat-dot">•</span>
                <span className="stat-bold">{card.repos}</span>
                <span>Repos</span>
              </div>
            </div>
          </div>
        </a>
      </TiltCard>
    );
  }

  return null;
}
