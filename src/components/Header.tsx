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
      <div className={`nav_links ${syne.className}`}>
        <h4>
          <Link href={"/#about"}>A propos</Link>
        </h4>
        <h4>
          <Link href={"/#prestations"}>Préstations</Link>
        </h4>
        <h4>
          <Link href={"/#projects"}>Réalisations</Link>
        </h4>
        <h4>
          <Link href={"/#testimonials"}>Avis clients</Link>
        </h4>
      </div>
      <Link href={"/contact"}>
        <button className="button">Contact</button>
      </Link>
    </nav>
  );
}
