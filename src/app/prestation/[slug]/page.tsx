"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import prestations from "@/app/cms/prestations";
import Error from "next/error";
import HomeContent from "@/app/homeContent";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Prestation({ params }: { params: { slug: string } }) {
  const prestationData = prestations.find((p) => p.slug === params.slug);

  if (!prestationData) {
    return <Error statusCode={404} />;
  }

  return (
    <main>
      <Header />
      <div className="prestation">
        <div className="prestation_header">
          <div className="gradient"></div>
          <div className="gradientBottom"></div>
          <h1 className="prestation_title">
            Agence de {prestationData.title.toLowerCase()}
          </h1>

          <p className="prestation_description">{prestationData.description}</p>

          <Link href={"/contact"}>
            <button className="button">{prestationData.ctaLabel}</button>
          </Link>
        </div>

        <div className="logoScrollSlider">
          <h2 className={syne.className}>Galerie - Galerie - </h2>
        </div>

        <div className="prestation_gallery">
          <Image
            src={prestationData.galery[0]}
            width={722}
            height={481}
            alt="project image"
          />
          <Image
            src={prestationData.galery[1]}
            width={722}
            height={481}
            alt="project image"
          />
          <Image
            src={prestationData.galery[2]}
            width={722}
            height={481}
            alt="project image"
          />
        </div>

        <p className="prestation_gallery_description">
          {prestationData.longDescription}
        </p>

        <Link href={"/contact"}>
          <button className="button">{prestationData.ctaLabel}</button>
        </Link>

        <PrestationImage src={prestationData.emphasedImage} />
      </div>

      <HomeContent />

      <Footer />
    </main>
  );
}

function PrestationImage({ src }: { src: string }) {
  return (
    <div className="prestation_image">
      <Image
        src="/styled_arrow.svg"
        width={116}
        height={65.6}
        alt="Arrow delimiter"
      />
      <div className="prestation_image_img">
        <Image
          src={src}
          width={722}
          height={481}
          alt="project image"
        />
      </div>

      <Image
        src="/styled_arrow.svg"
        width={116}
        height={65.6}
        alt="Arrow delimiter"
        className="rotateArrow"
      />
    </div>
  );
}
