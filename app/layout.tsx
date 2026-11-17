import type { Metadata } from 'next';
import { Comfortaa, Playfair_Display } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Московский метрополитен — Подземные дворцы',
  description:
    'Интерактивная кинематографическая презентация архитектуры, истории и инженерии Московского метрополитена.',
  openGraph: {
    title: 'Московский метрополитен — Подземные дворцы',
    description:
      'Интерактивная кинематографическая презентация архитектуры, истории и инженерии Московского метрополитена.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Московский метрополитен — Подземные дворцы',
    description:
      'Интерактивная кинематографическая презентация архитектуры, истории и инженерии Московского метрополитена.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${comfortaa.variable} ${playfairDisplay.variable}`}>
      <body suppressHydrationWarning className="bg-[#0A0A0B] text-[#F4F0E8] antialiased selection:bg-[#D4AF37]/30 selection:text-[#F4F0E8]">
        {children}
      </body>
    </html>
  );
}
