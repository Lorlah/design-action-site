import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "design-action — Context-aware design execution",
  description:
    "Turn scattered design context from meetings, tasks, chats and docs into actual work done for you.",
  openGraph: {
    title: "design-action — Context-aware design execution",
    description:
      "Turn scattered design context from meetings, tasks, chats and docs into actual work done for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "design-action — Context-aware design execution",
    description:
      "Turn scattered design context from meetings, tasks, chats and docs into actual work done for you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
