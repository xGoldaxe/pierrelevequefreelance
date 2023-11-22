import { Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
      <ul className={`nav_links ${syne.className}`}>
        <li>
          <Link href={"/#about"}>A propos</Link>
        </li>
        <li>
          <Link href={"/#prestations"}>Préstations</Link>
        </li>
        <li>
          <Link href={"/#projects"}>Réalisations</Link>
        </li>
        <li>
          <Link href={"/#testimonials"}>Avis clients</Link>
        </li>
      </ul>
      <Link href={"/contact"}>
        <button className="button">Contact</button>
      </Link>
    </nav>
  );
}
