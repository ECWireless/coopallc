import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coopa LLC',
  description: 'A collaborative agency for software development.',
  metadataBase: new URL('https://coopallc.com'),
  openGraph: {
    title: 'Coopa LLC',
    description: 'A collaborative agency for software development.',
    url: 'https://coopallc.com',
    siteName: 'Coopa LLC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
