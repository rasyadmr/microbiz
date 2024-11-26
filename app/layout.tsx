import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MicroBiz",
    template: "%s - MicroBiz",
  },
  description: "An automated data analyst website for small and medium-sized enterprises",
  icons: {
    icon: "/logo-transparent.png",
  },
  openGraph: {
    title: "MicroBiz - Automated Data Analyst for SMEs",
    description: "An automated data analyst website for small and medium-sized enterprises",
    images: [
      {
        url: "https://microbiz.vercel.app/logo-transparent.png",
        width: 500,
        height: 500,
        alt: "MicroBiz Logo",
      },
    ],
    url: "https://microbiz.vercel.app/",
    siteName: "MicroBiz",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroBiz - Automated Data Analyst for SMEs",
    description: "An automated data analyst website for small and medium-sized enterprises",
    images: "https://microbiz.vercel.app/logo-transparent.png",
    site: "@RasyadMr",
    creator: "@RasyadMr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
