import Project from "@/components/Project";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import { Syne } from "next/font/google";
import Image from "next/image";
import React from "react";

const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="nav_logo">
          <Image
            src="/logo.svg"
            width={38}
            height={38}
            alt="Logo Black Stories"
          />
          <p className={syne.className}>Black Stories</p>
        </div>
        <ul className={`nav_links ${syne.className}`}>
          <li>A propos</li>
          <li>Préstations</li>
          <li>Avis clients</li>
          <li>Réalisations</li>
        </ul>
        <button className="button">Contact</button>
      </nav>
      <div className="videoBackground">
        <video autoPlay muted loop>
          <source src="/video_bs_prod.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="keyNumbers">
        <div className="keyNumbers_container">
          <p className="keyNumbers_container_number">3+</p>
          <p className="keyNumbers_container_label">projets réalisés</p>
        </div>
        <div className="keyNumbers_container">
          <p className="keyNumbers_container_number">100%</p>
          <p className="keyNumbers_container_label">clients satisfaits</p>
        </div>
        <div className="keyNumbers_container">
          <p className="keyNumbers_container_number">2</p>
          <p className="keyNumbers_container_label">experts réal</p>
        </div>
        <div className="magicpattern"></div>
      </div>

      <Slider className="sliderLogo">
        {[1,2,3,4,5,6,7].map((index) => (
          <React.Fragment key={index}>
            <Image
              className="logoSlider"
              src="/client1.svg"
              width={64}
              height={64}
              alt="Logo Client 1"
            />
            <Image
              className="logoSlider"
              src="/client2.svg"
              width={64}
              height={64}
              alt="Logo Client 2"
            />
            <Image
              className="logoSlider"
              src="/client3.svg"
              width={64}
              height={64}
              alt="Logo Client 3"
            />
          </React.Fragment>
        ))}
      </Slider>

      <div className="about">
        <div className="about_image">
          <Image
            src="/clement.png"
            width={300}
            height={485}
            alt="Clement photo"
          />
        </div>
        <div className="about_text">
          <div className="about_text_title">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="Logo Black Stories"
            />
            <h2 className={syne.className}>Black Stories</h2>
          </div>
          <div className="about_text_content">
            <p className="paragraph">Nous sommes au service de l’excellence de votre communication et de vos vidéos. Nos réalistaeurs et monteurs seront apportés les élèlents nécessaires à la réalisation de votre projet.</p>
            <p className="paragraph">Nous sommes au service de l’excellence de votre communication et de vos vidéos. Nos réalistaeurs et monteurs seront apportés les élèlents nécessaires à la réalisation de votre projet.</p>
            <div className="about_text_content_ctas">
              <div className="primary_wrapper">
                <button className="button primary">Prendre contact</button>
              </div>
              <button className="button secondary">Voir nos préstations</button>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="section_content">
          <div>
            <h3>Recontre</h3>
            <p>Vous rencontrer est un moment important pour bien comprendre l’étendu de votre projet ou besoin pour pouvoir y répondre au mieux.</p>
          </div>
          <Image
            src="/arrow.svg"
            width={64}
            height={64}
            alt="Arrow delimiter"
          />
          <div>
            <h3>Idéation</h3>
            <p>Vous rencontrer est un moment important pour bien comprendre l’étendu de votre projet ou besoin pour pouvoir y répondre au mieux.</p>
          </div>
          <Image
            src="/arrow.svg"
            width={64}
            height={64}
            alt="Arrow delimiter"
          />
          <div>
            <h3>Réalisation</h3>
            <p>Vous rencontrer est un moment important pour bien comprendre l’étendu de votre projet ou besoin pour pouvoir y répondre au mieux.</p>
          </div>
          <Image
            src="/arrow.svg"
            width={64}
            height={64}
            alt="Arrow delimiter"
          />
          <div>
            <h3>Montage</h3>
            <p>Vous rencontrer est un moment important pour bien comprendre l’étendu de votre projet ou besoin pour pouvoir y répondre au mieux.</p>
          </div>
        </div>
      </section>

      <section className="prestations">
          <ul className="prestations_nav">
            <li>Reportages</li>
            <li>Corporate</li>
            <li>Clip musical</li>
            <li>Montage</li>
            <li>Photo d'entreprise</li>
            <li>Photo d'événements</li>
          </ul>
          <div className="prestations_cover">
           <Image
              src="/photo-entreprise.webp"
              width={1358}
              height={903}
              alt="Arrow delimiter"
            />
          </div>
          <div className="prestations_content">
            <div className="prestations_content_column">
              <h2 className={syne.className}>Photo d'entreprise</h2>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
            </div>
          </div>
          <div className="prestations_tiles">
            <div className="prestations_tiles_tile">
              <Image
                src="/photo-entreprise.webp"
                width={1358}
                height={903}
                alt="Arrow delimiter"
              />
            </div>
            <div className="prestations_tiles_tile">
              <Image
                src="/photo-entreprise.webp"
                width={1358}
                height={903}
                alt="Arrow delimiter"
              />
            </div>
            <div className="prestations_tiles_tile">
              <Image
                src="/photo-entreprise.webp"
                width={1358}
                height={903}
                alt="Arrow delimiter"
              />
            </div>
            <div className="prestations_tiles_tile">
              <Image
                src="/photo-entreprise.webp"
                width={1358}
                height={903}
                alt="Arrow delimiter"
              />
            </div>
          </div>
      </section>

      <section className="section">
        <Slider>
          <Testimonial
			      comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
            name="John Doe"
            title="Youtubeur"
            imgUrl="/client2.svg"
          />
          <Testimonial
			      comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
            name="John Doe"
            title="Youtubeur"
            imgUrl="/client2.svg"
          />
          <Testimonial
			      comment="Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un repcomment"
            name="John Doe"
            title="Youtubeur"
            imgUrl="/client2.svg"
          />
        </Slider>
      </section>
      <div className="primary_wrapper smallGap bigGapBottom">
        <button className="button primary">Prendre contact</button>
      </div>
        
      <div className="projectsWrapper">
        <Project color="#B8DBFC" />
        <Project color="#EEA2A2" />
        <Project color="#A6F2B6" />
      </div>

      <div className="emphasedSection">
        <div className="emphasedSection_content">
          <h3>Racontez</h3>
          <h4>VOTRE HISTOIRE</h4>
          <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un reportage.</p>
        </div>
        <div className="emphasedSection_image">
          <Image
            src="/clip.webp"
            width={478}
            height={414}
            alt="Arrow delimiter"
          />
        </div>
      </div>

      <div className="primary_wrapper smallGap">
        <button className="button primary">Prendre contact</button>
      </div>
      
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
    </main>
  )
}
