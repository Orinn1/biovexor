/**
 * ====================================================================
 * X2SWIFTZ BIO LINK LOGIC & SVG ICON RENDERER (slat.cc / guns.lol)
 * ====================================================================
 */

// SVG Icon Definitions
const SVGS = {
    discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    
    scripthub: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.7 1.05-.03 2.05-.58 2.63-1.46.42-.64.59-1.42.59-2.19V.02h-.03z"/></svg>`,
    
    roblox: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.166 0L0 18.834 18.834 24 24 5.166 5.166 0zm9.47 13.91l-4.524-1.212 1.212-4.524 4.524 1.212-1.212 4.524z"/></svg>`,
    
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    
    play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
    
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    
    cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    
    volumeOn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    
    volumeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,

    // Stylized SVG Avatar Silhouettes (รูปไม่ต้อง - ใช้ Vector แทน)
    mainAvatarSvg: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <defs>
                <radialGradient id="smokeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#090a0f" stop-opacity="1"/>
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#smokeGlow)" stroke="#38bdf8" stroke-width="1.5"/>
            <!-- Stylized silhouette portrait with smoke -->
            <path d="M28 85 C32 68, 40 60, 50 60 C60 60, 68 68, 72 85 Z" fill="#1e2433"/>
            <circle cx="50" cy="42" r="18" fill="#cbd5e1"/>
            <path d="M42 34 C44 26, 56 26, 58 34 C64 36, 62 44, 58 43 C52 41, 48 42, 42 34 Z" fill="#0f172a"/>
            <!-- Smoke wisps -->
            <path d="M58 48 Q68 45, 72 38 T82 32" stroke="rgba(255,255,255,0.45)" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M56 46 Q64 40, 68 30 T75 20" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
    `,

    demonMaskSvg: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg oni-svg">
            <rect width="100" height="100" rx="50" fill="#0d0f14"/>
            <!-- Oni Demon Mask Vector -->
            <path d="M30 22 L40 38 L32 46 Z" fill="#ef4444"/>
            <path d="M70 22 L60 38 L68 46 Z" fill="#ef4444"/>
            <path d="M36 38 C42 32, 58 32, 64 38 L68 62 C68 76, 58 84, 50 84 C42 84, 32 76, 32 62 Z" fill="#181c24" stroke="#ef4444" stroke-width="2"/>
            <!-- Eyes -->
            <polygon points="40,50 48,53 42,56" fill="#f87171"/>
            <polygon points="60,50 52,53 58,56" fill="#f87171"/>
            <!-- Fangs and Mouth -->
            <path d="M42 66 L50 70 L58 66 L55 74 L45 74 Z" fill="#fca5a5"/>
        </svg>
    `,

    robloxHead1: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <rect width="100" height="100" rx="50" fill="#111319"/>
            <rect x="28" y="32" width="44" height="42" rx="10" fill="#f3c69a"/>
            <!-- Black Beanie -->
            <path d="M24 38 C24 22, 76 22, 76 38 L76 44 L24 44 Z" fill="#18181b"/>
            <!-- Headphones -->
            <rect x="20" y="36" width="7" height="20" rx="3" fill="#27272a"/>
            <rect x="73" y="36" width="7" height="20" rx="3" fill="#27272a"/>
            <!-- Face features -->
            <circle cx="42" cy="52" r="3" fill="#09090b"/>
            <circle cx="58" cy="52" r="3" fill="#09090b"/>
            <path d="M46 62 Q50 66, 54 62" stroke="#09090b" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
    `,

    robloxHead2: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <rect width="100" height="100" rx="50" fill="#111319"/>
            <rect x="28" y="34" width="44" height="40" rx="10" fill="#f5d0b0"/>
            <!-- White Spiky Anime Hair -->
            <path d="M22 36 L30 18 L38 28 L50 14 L62 28 L70 18 L78 36 L74 44 L26 44 Z" fill="#f8fafc"/>
            <!-- Eyes glowing -->
            <ellipse cx="41" cy="50" rx="3.5" ry="4" fill="#38bdf8"/>
            <ellipse cx="59" cy="50" rx="3.5" ry="4" fill="#38bdf8"/>
            <path d="M47 62 Q50 64, 53 62" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
    `,

    robloxHead3: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <rect width="100" height="100" rx="50" fill="#111319"/>
            <!-- Dark Streetwear Hoodie -->
            <path d="M22 84 C26 50, 74 50, 78 84 Z" fill="#09090b"/>
            <rect x="32" y="38" width="36" height="34" rx="8" fill="#e2a87a"/>
            <!-- Hoodie Rim -->
            <path d="M28 42 C28 24, 72 24, 72 42 L72 68 C68 74, 32 74, 28 68 Z" fill="none" stroke="#27272a" stroke-width="7"/>
            <circle cx="43" cy="52" r="2.8" fill="#000"/>
            <circle cx="57" cy="52" r="2.8" fill="#000"/>
            <line x1="47" y1="62" x2="53" y2="62" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `,

    githubCat: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <rect width="100" height="100" rx="50" fill="#090b10"/>
            <!-- Monochrome anime Octocat -->
            <circle cx="50" cy="50" r="32" fill="#1e293b"/>
            <path d="M30 35 L38 24 L44 32 Z" fill="#334155"/>
            <path d="M70 35 L62 24 L56 32 Z" fill="#334155"/>
            <!-- Mask / Eyes -->
            <ellipse cx="42" cy="48" rx="4" ry="5" fill="#f8fafc"/>
            <ellipse cx="58" cy="48" rx="4" ry="5" fill="#f8fafc"/>
            <circle cx="43" cy="49" r="2" fill="#0f172a"/>
            <circle cx="57" cy="49" r="2" fill="#0f172a"/>
            <path d="M47 58 Q50 61, 53 58" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
        </svg>
    `,

    lightningIcon: `
        <svg viewBox="0 0 100 100" class="vector-avatar-svg">
            <defs>
                <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f97316"/>
                    <stop offset="100%" stop-color="#ea580c"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" rx="50" fill="#13141a" stroke="#ea580c" stroke-width="2"/>
            <path d="M54 18 L28 54 L48 54 L44 82 L72 46 L52 46 Z" fill="url(#hubGrad)"/>
        </svg>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    const config = typeof BIO_CONFIG !== "undefined" ? BIO_CONFIG : {};

    // Elements
    const splashScreen = document.getElementById("splashScreen");
    const mainAvatarContainer = document.getElementById("mainAvatarContainer");
    const viewCountText = document.getElementById("viewCountText");
    const typingUsername = document.getElementById("typingUsername");
    const bioPrimary = document.getElementById("bioPrimary");
    const langTagHighlight = document.getElementById("langTagHighlight");
    const langOthers = document.getElementById("langOthers");
    const mainBadgesRow = document.getElementById("mainBadgesRow");
    const socialDock = document.getElementById("socialDock");
    const cardsStack = document.getElementById("cardsStack");
    const toastMessage = document.getElementById("toastMessage");
    const toastText = document.getElementById("toastText");
    const bgAudio = document.getElementById("bgAudio");
    const audioToggleBtn = document.getElementById("audioToggleBtn");
    const audioIconContainer = document.getElementById("audioIconContainer");

    // =========================================================================
    // 1. RENDER TOP MAIN PROFILE CARD
    // =========================================================================
    function renderMainProfile() {
        const p = config.profile || {};

        // 1.1 Avatar
        if (mainAvatarContainer) {
            mainAvatarContainer.innerHTML = SVGS.mainAvatarSvg;
        }

        // 1.2 View count
        if (viewCountText && p.viewCount) {
            viewCountText.textContent = p.viewCount;
        }

        // 1.3 Subtitles & Languages
        if (bioPrimary && p.bioLine1) {
            bioPrimary.textContent = p.bioLine1;
        }

        if (p.bioLanguages) {
            if (langTagHighlight) langTagHighlight.textContent = p.bioLanguages.highlight || "NextJs";
            if (langOthers) langOthers.textContent = p.bioLanguages.others || "Go, Rust, Lua";
        }

        // 1.4 Badge Pills Row (Xenon Hub, ReaperX, Xenon Store, Best-Manga, Luxury Rank)
        if (mainBadgesRow && Array.isArray(p.badges)) {
            mainBadgesRow.innerHTML = p.badges.map(b => {
                const iconSvg = SVGS[b.icon] || SVGS.star;
                return `
                    <a href="${b.url || '#'}" target="_blank" rel="noopener noreferrer" class="badge-pill-item" title="${b.text}">
                        <span class="pill-svg-icon">${iconSvg}</span>
                        <span class="pill-text">${b.text}</span>
                    </a>
                `;
            }).join("");
        }

        // 1.5 Social Dock (Capsule row at bottom of main card)
        if (socialDock && Array.isArray(p.socialDock)) {
            socialDock.innerHTML = p.socialDock.map(s => {
                let iconSvg = SVGS[s.type] || SVGS.scripthub;
                let bgStyle = "";
                let classExtra = "";

                if (s.color === "gradient-ig") {
                    classExtra = "social-btn-ig";
                } else if (s.color) {
                    bgStyle = `style="background: ${s.color};"`;
                }

                return `
                    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-circle-btn ${classExtra}" ${bgStyle} title="${s.title || s.name}">
                        ${iconSvg}
                    </a>
                `;
            }).join("");
        }
    }

    // =========================================================================
    // 2. RENDER MODULAR CARDS STACK BELOW MAIN CARD
    // =========================================================================
    function renderModularCards() {
        if (!cardsStack || !Array.isArray(config.cards)) return;

        cardsStack.innerHTML = config.cards.map(card => {
            // Helper for Avatar SVG
            let avatarSvg = SVGS.robloxHead1;
            if (card.iconType === "oni-mask") avatarSvg = SVGS.demonMaskSvg;
            else if (card.iconType === "lightning") avatarSvg = SVGS.lightningIcon;
            else if (card.iconType === "roblox-avatar-1") avatarSvg = SVGS.robloxHead1;
            else if (card.iconType === "roblox-avatar-2") avatarSvg = SVGS.robloxHead2;
            else if (card.iconType === "roblox-avatar-3") avatarSvg = SVGS.robloxHead3;
            else if (card.iconType === "github-cat") avatarSvg = SVGS.githubCat;

            // 1. Discord Card
            if (card.type === "discord") {
                return `
                    <a href="${card.url}" target="_blank" rel="noopener noreferrer" class="modular-card pill-card discord-pill-card">
                        <div class="card-left-group">
                            <div class="card-avatar-wrap">
                                ${avatarSvg}
                            </div>
                            <div class="card-info-group">
                                <div class="card-title-row">
                                    <span class="card-title">${card.title}</span>
                                    <span class="card-badge-emoji">${card.titleBadge || ''}</span>
                                </div>
                                <div class="card-status-row">
                                    <span class="status-indicator-green"></span>
                                    <span class="status-num">${card.onlineCount} online</span>
                                    <span class="status-indicator-white"></span>
                                    <span class="status-num">${card.memberCount} members</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-action-wrap">
                            <span class="pill-action-btn join-btn">${card.buttonText || 'Join'}</span>
                        </div>
                    </a>
                `;
            }

            // 2. Script Hub Featured Card
            if (card.type === "scripthub") {
                return `
                    <a href="${card.url}" target="_blank" rel="noopener noreferrer" class="modular-card pill-card scripthub-pill-card">
                        <div class="card-left-group">
                            <div class="card-avatar-wrap">
                                ${avatarSvg}
                            </div>
                            <div class="card-info-group">
                                <div class="card-title-row">
                                    <span class="card-title">${card.title}</span>
                                    <span class="card-badge-emoji">${card.titleBadge || '⚡'}</span>
                                </div>
                                <div class="card-handle-row scripthub-domain-row">
                                    <span class="card-sub-icon">${SVGS.scripthub}</span>
                                    <span class="card-subtext">${card.subtext}</span>
                                </div>
                                <div class="card-stats-row scripthub-meta-row">
                                    <span>${card.meta}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-action-wrap">
                            <span class="pill-action-btn visit-btn">${card.buttonText || 'Visit'}</span>
                        </div>
                    </a>
                `;
            }

            // 3. Roblox Regular Account
            if (card.type === "roblox") {
                return `
                    <a href="${card.url || 'https://www.roblox.com'}" target="_blank" rel="noopener noreferrer" class="modular-card pill-card roblox-pill-card">
                        <div class="card-left-group">
                            <div class="card-avatar-wrap">
                                ${avatarSvg}
                                <span class="avatar-status-pip"></span>
                            </div>
                            <div class="card-info-group">
                                <div class="card-title-row">
                                    <span class="card-title">${card.name}</span>
                                </div>
                                <div class="card-handle-row">
                                    <span class="brand-sub-icon">${SVGS.roblox}</span>
                                    <span class="card-handle-text">${card.handle}</span>
                                </div>
                                <div class="card-stats-row">
                                    <span><strong>${card.friends}</strong> Friends • <strong>${card.followers}</strong> Followers</span>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
            }

            // 4. Roblox Extended Account (with About quote box)
            if (card.type === "roblox-extended") {
                return `
                    <div class="modular-card extended-card roblox-extended-card">
                        <div class="card-header-section">
                            <div class="card-avatar-wrap">
                                ${avatarSvg}
                                <span class="avatar-status-pip"></span>
                            </div>
                            <div class="card-info-group">
                                <div class="card-title-row">
                                    <span class="card-title">${card.name}</span>
                                </div>
                                <div class="card-handle-row">
                                    <span class="brand-sub-icon">${SVGS.roblox}</span>
                                    <span class="card-handle-text">${card.handle}</span>
                                </div>
                                <div class="card-stats-row">
                                    <span><strong>${card.friends}</strong> Friends • <strong>${card.followers}</strong> Followers</span>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom About Box -->
                        <div class="card-about-section">
                            <div class="about-label">About</div>
                            <div class="about-quote-row">
                                <span class="about-meta-icon">${SVGS.info}</span>
                                <span class="about-quote-text">${card.about}</span>
                            </div>
                            <div class="about-joined-row">
                                <span class="about-meta-icon">${SVGS.clock}</span>
                                <span class="about-joined-text">${card.joinedText}</span>
                            </div>
                        </div>
                    </div>
                `;
            }

            // 5. GitHub Card
            if (card.type === "github") {
                return `
                    <a href="${card.url || 'https://github.com'}" target="_blank" rel="noopener noreferrer" class="modular-card pill-card github-pill-card">
                        <div class="card-left-group">
                            <div class="card-avatar-wrap">
                                ${avatarSvg}
                            </div>
                            <div class="card-info-group">
                                <div class="card-title-row">
                                    <span class="card-title">${card.name}</span>
                                </div>
                                <div class="card-handle-row">
                                    <span class="brand-sub-icon">${SVGS.github}</span>
                                    <span class="card-handle-text">${card.handle}</span>
                                </div>
                                <div class="card-stats-row">
                                    <span><strong>${card.followers}</strong> Followers • <strong>${card.following}</strong> Following • <strong>${card.repos}</strong> Repos</span>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
            }

            return "";
        }).join("");
    }

    // =========================================================================
    // 3. TYPEWRITER EFFECT FOR USERNAME (x2Swiftz|)
    // =========================================================================
    function initTypewriter() {
        if (!typingUsername) return;
        const targetText = (config.profile && config.profile.username) || "x2Swiftz";
        let index = 0;
        let isDeleting = false;
        typingUsername.textContent = "";

        function typeLoop() {
            if (!isDeleting && index <= targetText.length) {
                typingUsername.textContent = targetText.slice(0, index);
                index++;
                if (index > targetText.length) {
                    // Pause on complete word
                    setTimeout(() => {
                        // Stay written or slight pause
                        // We will keep it full with blinking cursor
                    }, 4000);
                    return;
                }
            }
            setTimeout(typeLoop, config.profile.typingSpeed || 110);
        }

        typeLoop();
    }

    // =========================================================================
    // 4. CLICK TO ENTER & AUDIO ENGINE
    // =========================================================================
    let isEntered = false;

    function enterWebsite() {
        if (isEntered) return;
        isEntered = true;

        if (splashScreen) {
            splashScreen.classList.add("fade-out");
            setTimeout(() => {
                splashScreen.style.display = "none";
            }, 600);
        }

        // Play audio
        if (bgAudio && config.music && config.music.enabled) {
            bgAudio.volume = config.music.volume || 0.35;
            bgAudio.play().then(() => {
                updateAudioIcon(true);
            }).catch(() => {
                updateAudioIcon(false);
            });
        }
    }

    if (splashScreen) {
        splashScreen.addEventListener("click", enterWebsite);
        splashScreen.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") enterWebsite();
        });
    }

    function updateAudioIcon(isPlaying) {
        if (!audioIconContainer) return;
        audioIconContainer.innerHTML = isPlaying ? SVGS.volumeOn : SVGS.volumeOff;
    }

    if (audioToggleBtn && bgAudio) {
        audioToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (bgAudio.paused) {
                bgAudio.play().then(() => updateAudioIcon(true)).catch(() => updateAudioIcon(false));
            } else {
                bgAudio.pause();
                updateAudioIcon(false);
            }
        });
    }

    // =========================================================================
    // 5. TOAST NOTIFICATION HELPER
    // =========================================================================
    let toastTimer = null;
    function showToast(text) {
        if (!toastMessage || !toastText) return;
        toastText.textContent = text;
        toastMessage.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastMessage.classList.remove("visible");
        }, 2200);
    }

    // =========================================================================
    // 6. 3D TILT EFFECT ON CARDS (Interactive Depth)
    // =========================================================================
    function initTilt() {
        if (window.innerWidth <= 768) return;
        const tiltCards = document.querySelectorAll(".slat-card, .modular-card");

        tiltCards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const rotateX = (-y / (rect.height / 2)) * 4.5;
                const rotateY = (x / (rect.width / 2)) * 4.5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        });
    }

    // =========================================================================
    // 7. BACKGROUND STARFIELD / DUST PARTICLES
    // =========================================================================
    function initParticles() {
        const canvas = document.getElementById("starCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const count = 45;
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.5 + 0.15
            });
        }

        function drawStars() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                s.x += s.vx;
                s.y += s.vy;

                if (s.x < 0) s.x = width;
                if (s.x > width) s.x = 0;
                if (s.y < 0) s.y = height;
                if (s.y > height) s.y = 0;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
                ctx.fill();
            }

            requestAnimationFrame(drawStars);
        }

        drawStars();
    }

    // Run All
    renderMainProfile();
    renderModularCards();
    initTypewriter();
    initTilt();
    initParticles();
    updateAudioIcon(false);
});
