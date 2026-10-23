/**
 * ====================================================================
 * X2SWIFTZ BIO LINK CONFIGURATION (SLAT.CC / GUNS.LOL AESTHETICS)
 * ====================================================================
 * ปรับแต่งข้อมูลทั้งหมดได้ที่ไฟล์นี้
 */

const BIO_CONFIG = {
    // ข้อมูลการ์ดหลักด้านบน (Main Profile Card)
    profile: {
        username: "x2Swiftz",
        typingSpeed: 110,
        viewCount: "8.2K",
        bioLine1: "I'm Content Creator and Developer",
        bioLanguages: {
            prefix: "// Language: ",
            highlight: "NextJs",
            highlightColor: "#0284c7",
            others: "Go, Rust, Lua"
        },
        // ป้าย Pills ในการ์ดหลัก
        badges: [
            { id: "xenon-hub", icon: "play", text: "Xenon Hub", url: "https://th.blacklisthub.workers.dev/" },
            { id: "reaper-x", icon: "code", text: "ReaperX", url: "https://th.blacklisthub.workers.dev/" },
            { id: "xenon-store", icon: "cart", text: "Xenon Store", url: "https://discord.gg/6MTUP78KF6" },
            { id: "best-manga", icon: "book", text: "Best-Manga", url: "https://th.blacklisthub.workers.dev/" },
            { id: "luxury-rank", icon: "star", text: "Luxury Rank", url: "https://discord.gg/6MTUP78KF6" }
        ],
        // ไอคอนโซเชียลในแถบ Dock ด้านล่างของการ์ดหลัก (SVG ทั้งหมด)
        socialDock: [
            { 
                name: "Script Hub", 
                type: "scripthub", 
                color: "#f97316", 
                url: "https://th.blacklisthub.workers.dev/",
                title: "เว็บไซต์ Script Hub"
            },
            { 
                name: "Facebook", 
                type: "facebook", 
                color: "#1877f2", 
                url: "https://facebook.com",
                title: "Facebook"
            },
            { 
                name: "Instagram", 
                type: "instagram", 
                color: "gradient-ig", 
                url: "https://instagram.com",
                title: "Instagram"
            },
            { 
                name: "TikTok", 
                type: "tiktok", 
                color: "#000000", 
                url: "https://tiktok.com",
                title: "TikTok"
            },
            { 
                name: "YouTube", 
                type: "youtube", 
                color: "#ff0000", 
                url: "https://www.youtube.com/@Blacklistxyx",
                title: "YouTube Channel"
            },
            { 
                name: "Discord", 
                type: "discord", 
                color: "#5865f2", 
                url: "https://discord.gg/6MTUP78KF6",
                title: "Discord Community"
            }
        ]
    },

    // การ์ดโมดูลาร์ด้านล่าง (Modular Cards Stack ตรงตามรูป)
    cards: [
        // 1. Discord Community Card
        {
            type: "discord",
            iconType: "oni-mask",
            title: "x2Swiftz Community",
            titleBadge: "🌸",
            onlineCount: "1.7K",
            memberCount: "28.9K",
            buttonText: "Join",
            url: "https://discord.gg/6MTUP78KF6"
        },
        // 2. เว็บไซต์ Script Hub Card (เด่นพิเศษ)
        {
            type: "scripthub",
            iconType: "lightning",
            title: "Blacklist Script Hub",
            titleBadge: "⚡",
            subtext: "th.blacklisthub.workers.dev",
            meta: "🟢 Free Roblox Scripts • Blox Fruits & More",
            buttonText: "Visit",
            url: "https://th.blacklisthub.workers.dev/"
        },
        // 3. Roblox Account 1
        {
            type: "roblox",
            iconType: "roblox-avatar-1",
            name: "x_2Swiftz",
            handle: "@x_2Swiftz",
            friends: "78",
            followers: "979",
            url: "https://www.roblox.com"
        },
        // 4. Roblox Account 2
        {
            type: "roblox",
            iconType: "roblox-avatar-2",
            name: "ツフスウィ",
            handle: "@x2SwiftzReal",
            friends: "52",
            followers: "519",
            url: "https://www.roblox.com"
        },
        // 5. Roblox Account 3 (พร้อมกล่อง About คำคม)
        {
            type: "roblox-extended",
            iconType: "roblox-avatar-3",
            name: "LILBACKNIPPA",
            handle: "@LILBACKNIPPA",
            friends: "133",
            followers: "93",
            url: "https://www.roblox.com",
            about: 'AM ไปยัน PM ที่กูรักก็มีแค่ " Money 🤑 "',
            joinedText: "Joined 2 years ago"
        },
        // 6. GitHub Profile Card
        {
            type: "github",
            iconType: "github-cat",
            name: "Not Found",
            handle: "@x2Swiftz",
            followers: "62",
            following: "0",
            repos: "20",
            url: "https://github.com"
        }
    ],

    // เพลงพื้นหลัง (เล่นอัตโนมัติเมื่อกดแตะหน้าจอครั้งแรก)
    music: {
        enabled: true,
        title: "Ambient Cyber Chill",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
        volume: 0.35
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = BIO_CONFIG;
}
