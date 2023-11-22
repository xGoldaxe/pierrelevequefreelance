import Image from "next/image";
import Link from "next/link";

export default function AboutBlock() {
  return (
    <div className="about">
      <div className="about_image" id="about">
        <Image
          src="/clement.png"
          width={300}
          height={485}
          alt="Clement photo"
        />
      </div>
      <div className="about_content">
        <div className="about_text">
          <p className="paragraph">
            Nous sommes au service de l’excelNous sommes au service de
            l’excellence de votre communication et de lence de votre
            communication et de vos vidéos. Nos réalistaeurs et monteurs seront
            apportés les élèlents nécessaires à la réalisation de votre projet.
          </p>
          <p className="paragraph">
            Nous sommes au service de l’excellence de votre communication et de
            vos vidéos. Nos réalistaeurs et monteurs seront apportés les
            élèlents nécessaires à la réalisation de votre projet.
          </p>
        </div>
        <Link href="/contact">
          <div className="emphasedSection_content_button">
            <Image
              src="/styled_arrow.svg"
              width={58}
              height={32.8}
              alt="Arrow delimiter"
            />
            <button className="button">Parlez nous !</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
