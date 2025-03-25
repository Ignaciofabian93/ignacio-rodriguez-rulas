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
  robots: "index, follow",
  openGraph: {
    title: "Your Website Title",
    description: "Your website description",
    images: ["https://ignaciorodriguez.net/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
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

        {/* Open Graph (OG) meta tags for Facebook & LinkedIn */}
        <meta property="og:title" content="Ignacio Rodríguez Rulas | Software Engineer" />
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

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Ignacio Rodríguez Rulas | Software Engineer" />
        <meta
          name="twitter:description"
          content="Explore the portfolio and projects of Ignacio Rodríguez Rulas, a software engineer specializing in full-stack and mobile development."
        />
        <meta name="twitter:image" content="https://www.ignaciorodriguez.net/og-image.jpg" />

        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer position="bottom-center" theme="light" autoClose={2000} icon={undefined} />
        {children}
      </body>
    </html>
  );
}
