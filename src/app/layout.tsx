import "../styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Agence de production audiovisuelle à paris - Black Stories",
  description:
    "Back Stories est une agence de production audiovisuelle basé sur Paris. Notre société vous propose des vidéos d'entreprise, des reportages, du montage et de la photographie.",
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
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      ></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
