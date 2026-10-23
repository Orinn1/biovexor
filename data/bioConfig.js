/**
 * ====================================================================
 * X2SWIFTZ BIO LINK CONFIGURATION (SLAT.CC / GUNS.LOL AESTHETICS)
 * ====================================================================
 */

export const BIO_CONFIG = {
  profile: {
    username: "Vexor",
    typingSpeed: 110,
    viewCount: "8.2K",
    bioLine1: "I'm Content Creator and Developer",
    bioLanguages: {
      prefix: "// Language: ",
      highlight: "NextJs",
      highlightColor: "#0284c7",
      others: "Lua",
    },
    avatar: "/assets/main-avatar.png",
    // Badges / pills row on the main profile card (Only Blacklist Hub and Traffic Hub)
    badges: [
      { id: "blacklist-hub", icon: "Play", text: "Blacklist Hub", url: "https://th.blacklisthub.workers.dev/" },
      { id: "traffic-hub", icon: "Zap", text: "Traffic Hub", url: "https://th.blacklisthub.workers.dev/" },
    ],
    // Inset social capsule dock buttons (Only YouTube & Discord)
    socialDock: [
      {
        name: "YouTube",
        type: "youtube",
        url: "https://www.youtube.com/@Blacklistxyx",
        title: "YouTube Channel",
      },
      {
        name: "Discord",
        type: "discord",
        url: "https://discord.gg/6MTUP78KF6",
        title: "Discord Community",
      },
    ],
  },

  // Modular Cards Stack (Only Discord Community Card)
  cards: [
    // Discord Community Card
    {
      id: "discord-community",
      type: "discord",
      avatar: "/assets/discord-icon.jpg",
      title: "x2Swiftz Community",
      onlineCount: "1.7K",
      memberCount: "28.9K",
      buttonText: "Join",
      url: "https://discord.gg/6MTUP78KF6",
    },
  ],

  // Background Audio (Pondering - Prod. by VECCHI, 50% Volume, Hidden Pill Widget)
  music: {
    enabled: true,
    title: "Pondering - Prod. by VECCHI",
    artist: "VECCHI",
    src: "/assets/bg-music.mp3",
    volume: 0.5,
    showPill: false,
  },
};
