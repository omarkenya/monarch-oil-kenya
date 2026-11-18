import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monarch Lubricating Oil & Grease | Athi River, Kenya | 统一润滑油',
  description: 'Official Monarch / Tongyi Lubricants Depot in Athi River, Machakos County, Kenya. Heavy-duty non-road, mining, quarry, and cement machinery lubricants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}