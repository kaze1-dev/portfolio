import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Poppins,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/chat_widget';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Faisal',
  description:
    "Faisal Abbas's personal portfolio website showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sansFont.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-(family-name:--font-poppins)">
        <Header />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}