import { Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Header() {
  return (
    <nav className="nav">
      <Link href={"/"}>
        <div className="nav_logo">
          <Image
            src="/logo.svg"
            width={38}
            height={38}
            alt="Logo Black Stories"
          />
          <p className={syne.className}>BS PROD</p>
        </div>
      </Link>
      <div className={`nav_links ${syne.className}`}>
        <AnimatedLink href={"/#about"}>A propos</AnimatedLink>
        <AnimatedLink href={"/#prestations"}>Préstations</AnimatedLink>
        <AnimatedLink href={"/#projects"}>Réalisations</AnimatedLink>
        <AnimatedLink href={"/#testimonials"}>Avis clients</AnimatedLink>
      </div>
      <Link href={"/contact"}>
        <button className="button">Contact</button>
      </Link>
    </nav>
  );
}
