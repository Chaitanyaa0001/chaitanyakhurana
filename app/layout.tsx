import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import SmoothScroll from "./components/SmoothScrolling";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaitanya Khurana",
  description: "I'm a full-stack developer focused on building scalable backend systems while exploring GenAI and AI agents. I love solving real-world problems with clean code and modern web technologies.",
  keywords: "Full Stack Developer, Web Developer, Next Developer, React Developer, Node.js, JavaScript, Portfolio, MongoDB, MERN Stack, Software Engineer",
  icons: {
    icon: "/USER.jpg"
  }
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
        <CustomCursor />
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
