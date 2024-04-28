import "../styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Pierre Leveque Developpeur Web",
  description:
    "Pierre Leveque est un développeur web expert sur React et son écosystème. Code depuis plus de 10 ans et fort d'une expérience professionnelle, il est disponible pour diverses missions en développement et consulting. Ses technologies préférées sont React, javasript, typescript, java, node, gsap, angular, sass, tailwind, sql, mongodb et bien d'autres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
