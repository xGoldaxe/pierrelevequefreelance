import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
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
          <p className={syne.className}>Black Stories</p>
        </div>
        <div className="footer_inner_section">
          <h5>Navigation</h5>
          <p>A propos</p>
          <p>Avis clients</p>
          <p>Réalisations</p>
        </div>
        <div className="footer_inner_section">
          <h5>Réseaux sociaux</h5>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Email</p>
        </div>
        <div className="footer_inner_section">
          <h5>Légal</h5>
          <p>CGU</p>
          <p>CGV</p>
        </div>
        <p className="footer_inner_watermark">© 2023 Black Stories SAS</p>
      </div>
    </footer>
  );
}
