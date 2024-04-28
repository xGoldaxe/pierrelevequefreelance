import { Syne } from "next/font/google";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";
import ContactLinksButtons from "./ContactLinksButtons";

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
          <p className={syne.className}>Pierre Leveque</p>
        </div>
      </Link>
      <div className={`nav_links ${syne.className}`}>
        <AnimatedLink href={"/#about"}>A propos</AnimatedLink>
        <AnimatedLink href={"/#prestations"}>Préstations</AnimatedLink>
        <AnimatedLink href={"/#projects"}>Réalisations</AnimatedLink>
        <AnimatedLink href={"/#testimonials"}>Avis clients</AnimatedLink>
      </div>
      <ContactLinksButtons light={true}/>
    </nav>
  );
}
