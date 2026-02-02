import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Cetagory from './components/Cetagory';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MinMart - Your Online Grocery Store',
  description:
    'Shop fresh groceries online with MinMart. Fast delivery, great prices, and a wide selection of products at your fingertips.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Cetagory />
        {children}
        <Footer />
      </body>
    </html>
  );
}
