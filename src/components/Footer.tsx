import linksCms from "@/app/cms/links";
import prestations from "@/app/cms/prestations";
import { Syne } from "next/font/google";
import Image from "next/image";
import AnimatedLink from "./AnimatedLink";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="nav_logo">
          <Image
            src="/logo.svg"
            width={38}
            height={38}
            alt="Logo Black Stories"
          />
          <p className={syne.className}>Pierre Leveque</p>
        </div>
        <div className="footer_inner_section">
          <h5>Navigation</h5>
          {prestations.map((prestation) => (
            <AnimatedLink
              href={`/prestation/${prestation.slug}`}
              key={prestation.title}
            >
              <p>{prestation.title}</p>
            </AnimatedLink>
          ))}
          <AnimatedLink href={"/#about"}><p>A propos</p></AnimatedLink>
          <AnimatedLink href={"/#prestations"}><p>Préstations</p></AnimatedLink>
          <AnimatedLink href={"/#projects"}><p>Réalisations</p></AnimatedLink>
          <AnimatedLink href={"/#testimonials"}><p>Avis clients</p></AnimatedLink>
          <AnimatedLink href={"/#pricing"}><p>Tarifs</p></AnimatedLink>
        </div>
        <div className="footer_inner_section">
          <h5>Ressources</h5>
          {
            linksCms.socials.map((social) => (
              <AnimatedLink href={social.url} key={social.name} target={social.target}><p>{social.name}</p></AnimatedLink>
            ))
          }
        </div>
        <p className="footer_inner_watermark">© 2024 Pierre Leveque</p>
      </div>
    </footer>
  );
}
