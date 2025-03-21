import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignacio Rodríguez Rulas | Software Engineer",
  description:
    "Experienced Software Engineer with expertise in full-stack development, React, Next.js, mobile development, and more.",
  keywords:
    "Ignacio Rodríguez Rulas, software engineer, React, Next.js, full-stack developer, mobile development, web development, JavaScript, TypeScript, React Native, Expo",
  authors: [{ name: "Ignacio Rodríguez Rulas", url: "https://www.ignaciorodriguez.net" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",

  openGraph: {
    title: "Ignacio Rodríguez Rulas | Software Engineer",
    description:
      "Explore the portfolio and projects of Ignacio Rodríguez Rulas, a software engineer specializing in full-stack and mobile development.",
    url: "https://www.ignaciorodriguez.net",
    siteName: "Ignacio Rodríguez Rulas",
    images: [
      {
        url: "https://www.ignaciorodriguez.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignacio Rodríguez Rulas | Software Engineer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer position="bottom-center" theme="light" autoClose={2000} icon={undefined} />
        {children}
      </body>
    </html>
  );
}
