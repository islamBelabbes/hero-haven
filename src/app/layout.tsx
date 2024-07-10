import "@/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Haven",
  description: "Free Hero banner for your next app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
