import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Signalement des Infractions - Plateforme Sécurisée',
  description: 'Plateforme de signalement et de suivi des infractions en ligne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}