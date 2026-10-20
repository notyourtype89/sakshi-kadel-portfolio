import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakshi Kadel — UI/UX Designer",
  description:
    "Portfolio of Sakshi Kadel, UI/UX Designer creating thoughtful web and mobile product experiences.",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "Sakshi Kadel — UI/UX Designer",
    description: "Selected UI/UX and product design work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
