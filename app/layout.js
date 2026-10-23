import './globals.css';

export const metadata = {
  metadataBase: new URL('https://weruning.cc'),
  title: 'Vexor • weruning.cc',
  description: "Vexor - Content Creator and Developer // Language: NextJs, Lua",
  openGraph: {
    title: 'Vexor • weruning.cc',
    description: "I'm Content Creator and Developer // Language: NextJs, Lua",
    url: 'https://weruning.cc/Vexor',
    siteName: 'weruning.cc',
    images: [
      {
        url: '/assets/main-avatar.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  icons: {
    icon: 'data:,',
  },
};

export const viewport = {
  themeColor: '#08090d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
