import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haruki Services - Discord Bots & Web Development",
  description: "Build custom Discord bots, integrations, and websites for your community",
  keywords: "Discord bots, integrations, web development, community tools",
  authors: [{ name: "Haruki Services" }],
  openGraph: {
    title: "Haruki Services",
    description: "Build custom Discord bots, integrations, and websites for your community",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
