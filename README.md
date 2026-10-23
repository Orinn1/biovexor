# 🌌 Vexor • Next.js Bio Link Website (weruning.cc)

โปรเจกต์หน้าเว็บไซต์รวบรวมโปรไฟล์และลิงก์โซเชียลส่วนตัว (Link-in-Bio) สร้างด้วย **Next.js 16 (App Router) + React 19 + Vanilla CSS Design System** ในธีม **Cyber Dark Glassmorphism** ถอดแบบตรงตาม slat.cc / guns.lol สวยงามลื่นไหลระดับพรีเมียม

---

## ✨ ฟีเจอร์เด่น (Key Features)

1. **Next.js App Router Architecture**:
   - พัฒนาด้วย Next.js โครงสร้างคอมโพเนนต์โมดูลาร์ (`components/`)
   - ประสิทธิภาพสูง พร้อม Fast Refresh และ SEO Meta Tags ครบถ้วน
2. **[ Click to Enter ] Splash Screen**:
   - หน้าจอต้อนรับแบบบรรยากาศมืดมน มีแสงนีออนกระพริบ
   - เล่นเพลงพื้นหลังอัตโนมัติ (Bypasses Browser Audio Autoplay restrictions)
3. **Interactive 3D Tilt Card**:
   - การ์ดกระจกแก้ว (Glassmorphic Card) เบลอฉากหลัง พร้อมไฮไลท์ขอบเรืองแสง
   - หมุนเอียง 3 มิติตามตำแหน่งเมาส์ (Desktop 3D Tilt)
4. **Ambient Volumetric Light Rays & Motion Parallax Starfield**:
   - ลำแสงทแยงมุมส่องผ่านความมืด (Ambient Beams)
   - 3-Layer Parallax Starfield ด้วย `motion/react`
5. **Real-time Discord Server Fetching**:
   - เชื่อมต่อ Discord API ผ่าน Next.js Route Handler (`/api/discord`) เพื่อดึงไอคอนเซิร์ฟเวอร์ จำนวนสมาชิก และคนออนไลน์แบบเรียลไทม์
6. **Main Profile Card (Vexor)**:
   - เอฟเฟกต์พิมพ์ชื่อแบบมี Cursor กระพริบ `Vexor|`
   - แถบแท็กภาษาโค้ด `// Language: NextJs, Lua`
   - ป้าย Hub: `Blacklist Hub` และ `Traffic Hub`
   - Social Dock: YouTube และ Discord (คัดลอกแท็กพร้อมแจ้งเตือน Toast)

---

## 🛠️ วิธีการรันโปรเจกต์

```bash
# รันโหมด Development (Live Reloading)
npm run dev

# บิลด์สำหรับ Production
npm run build

# รันโหมด Production Server
npm start
```

เปิดเบราว์เซอร์ไปที่: **http://localhost:3000**

---

## ⚙️ การแก้ไขข้อมูลส่วนตัวและลิงก์ (Customization)

สามารถเปิดไฟล์ **[data/bioConfig.js](file:///c:/Users/Administrator/.gemini/antigravity-ide/scratch/bio-website/data/bioConfig.js)** และแก้ไขข้อมูลทั้งหมดได้ง่ายๆ:
- **`profile.username` / `displayName`**: ชื่อที่แสดงบนหน้าเว็บ
- **`profile.avatar`**: ลิงก์หรือ path รูปโปรไฟล์
- **`profile.badges`**: ป้ายแท็กหรือปุ่มลิงก์สคริปต์ฮับ
- **`profile.socialDock`**: ไอคอนโซเชียลในแถบแคปซูล
- **`cards`**: การ์ดโมดูลาร์ Discord, Roblox, GitHub
- **`music`**: เพลงพื้นหลัง (ใส่ URL ลิงก์ไฟล์เสียง `.mp3`)
