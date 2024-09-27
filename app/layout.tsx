import type { Metadata } from "next";
import "./ui/global.css";

export const metadata: Metadata = {
  title: "ClockPath App",
  description: "Implemented by Danny and Greg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
