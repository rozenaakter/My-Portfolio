// src/app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata = {
  title: 'dev Rozena | Portfolio',
  description: 'Fontend developer portfolio',
};

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>{children}</body>
    </html>
  );
}