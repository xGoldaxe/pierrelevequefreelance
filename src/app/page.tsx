import AboutBlock from "@/components/AboutBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import ScrollBullets from "@/components/scrollBullets";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import { Libre_Baskerville, Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prestations from "./cms/prestations";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Header />
      <div className="videoBackground">
        <div className="videoBackground_video">
          <video autoPlay muted loop>
            <source src="/video_bs_prod.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className="keyNumbers">
        <div className="keyNumbers_container">
          <p
            className={`keyNumbers_container_number ${libreBaskerville.className}`}
          >
            3+
          </p>
          <p className="keyNumbers_container_label">projets réalisés</p>
        </div>
        <div className="keyNumbers_container">
          <p
            className={`keyNumbers_container_number ${libreBaskerville.className}`}
          >
            100%
          </p>
          <p className="keyNumbers_container_label">clients satisfaits</p>
        </div>
        <div className="keyNumbers_container">
          <p
            className={`keyNumbers_container_number ${libreBaskerville.className}`}
          >
            2
          </p>
          <p className="keyNumbers_container_label">experts réal</p>
        </div>
      </div>
      <HomeContent />
      <Footer />
    </main>
  );
}

export function HomeContent() {
  return (
    <>
      <Slider>
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Black Stories - </h2>
        </div>
      </Slider>

      <AboutBlock />

      <div className="process" id="prestations">
        <h2 className={`processTitle ${libreBaskerville.className}`}>
          Nos prestations
        </h2>
        <ScrollBullets
          elements={prestations}
        />
      </div>

      <div className="scrollArrow">
        <Image
          src="/styled_arrow.svg"
          width={116}
          height={65.6}
          alt="Arrow delimiter"
        />
      </div>

      <div className="projectsWrapper" id="projects">
        <Project />
        <section className="project">
          <div className="project_content">
            <div
              className="project_content_image"
              style={{ backgroundImage: `url("/project2.jpg")` }}
            />
          </div>
        </section>
        <section className="project">
          <div className="project_content">
            <div
              className="project_content_image"
              style={{ backgroundImage: `url("/project3.jpg")` }}
            />
          </div>
        </section>
      </div>

      <Slider>
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Avis clients - </h2>
        </div>
      </Slider>

      <div className="testimonials" id="testimonials">
        <Testimonial
          comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
          name="John Doe"
          title="Youtubeur"
          imgUrl="/client3.svg"
        />
        <Testimonial
          comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
          name="John Doe"
          title="Youtubeur"
          imgUrl="/client3.svg"
        />
        <Testimonial
          comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
          name="John Doe"
          title="Youtubeur"
          imgUrl="/client3.svg"
        />
      </div>

      <div className="emphasedSection">
        <div className="emphasedSection_content">
          <div>
            <h3>Racontez</h3>
            <h4>VOTRE HISTOIRE</h4>
            <p>
              Racontez votre histoire avec un reportage. Une méthode de
              communication particulièrement efficace et engageante. Cette
              approche combine les avantages de l interview et la puissance de l
              immersion journalistique, Racontez votre histoire avec un
              reportage.
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
        <div className="emphasedSection_image">
          <div className="emphasedSection_image_wrapper">
            <Image
              src="/clip.webp"
              width={478}
              height={414}
              alt="Arrow delimiter"
            />
          </div>
        </div>
      </div>
    </>
  );
}
