import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Ignacio Rodríguez Rulas | Software Engineer</title>
        <meta
          name="description"
          content="Explore the portfolio and projects of Ignacio Rodríguez Rulas, a software engineer specializing in full-stack and mobile development."
        />
        <meta property="og:title" content="Ignacio Rodríguez Rulas | Software Engineer" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta
          property="og:description"
          content="Explore the portfolio and projects of Ignacio Rodríguez Rulas, a software engineer specializing in full-stack and mobile development."
        />
        <meta property="og:url" content="https://www.ignaciorodriguez.net" />
        <meta property="og:site_name" content="Ignacio Rodríguez Rulas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ignaciorodriguez.net/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer position="bottom-center" theme="light" autoClose={2000} icon={undefined} />
        {children}
      </body>
    </html>
  );
}
