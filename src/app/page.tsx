import Project from "@/components/Project";
import ScrollBullets from "@/components/scrollBullets";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import { Libre_Baskerville, Syne } from "next/font/google";
import Image from "next/image";
import React from "react";

const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

const libreBaskerville = Libre_Baskerville({
	weight: ['400'],
	subsets: ['latin'],
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
        <div className="videoBackground_video">
          <video autoPlay muted loop>
            <source src="/video_bs_prod.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className="keyNumbers">
        <div className="keyNumbers_container">
          <p className={`keyNumbers_container_number ${libreBaskerville.className}`}>3+</p>
          <p className="keyNumbers_container_label">projets réalisés</p>
        </div>
        <div className="keyNumbers_container">
          <p className={`keyNumbers_container_number ${libreBaskerville.className}`}>100%</p>
          <p className="keyNumbers_container_label">clients satisfaits</p>
        </div>
        <div className="keyNumbers_container">
          <p className={`keyNumbers_container_number ${libreBaskerville.className}`}>2</p>
          <p className="keyNumbers_container_label">experts réal</p>
        </div>
      </div>

      <Slider>
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Black Stories-</h2>
        </div>
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
        <div className="about_content">
          <div className="about_text">
            <p className="paragraph">Nous sommes au service de l’excelNous sommes au service de l’excellence de votre communication et de lence de votre communication et de vos vidéos. Nos réalistaeurs et monteurs seront apportés les élèlents nécessaires à la réalisation de votre projet.</p>
            <p className="paragraph">Nous sommes au service de l’excellence de votre communication et de vos vidéos. Nos réalistaeurs et monteurs seront apportés les élèlents nécessaires à la réalisation de votre projet.</p>
          </div>
          <div className="emphasedSection_content_button">
              <Image
                src="/styled_arrow.svg"
                width={58}
                height={32.8}
                alt="Arrow delimiter"
              />
              <button className="button">Parlez nous !</button>
            </div>
        </div>
            {/* <div className="about_text_ctas">
              <div className="primary_wrapper">
                <button className="button primary">Prendre contact</button>
              </div>
              <button className="button secondary">Voir nos préstations</button>
            </div> */}
      </div>

      <div className="process">
        <h2 className={`processTitle ${libreBaskerville.className}`}>Nos prestations</h2>
        <ScrollBullets
          elements={[
            {
              title: "Preliminar discussion",
              content: "Here we defined your needs. Elements required, copy and contents to show.",
            },
            {
              title: "Design and copywriting",
              content: "We create a proposed prototype for your landing page. Including design and content.",
            },
            {
              title: "Your validation",
              content: "You like our proposition and validate it. Otherwise it’s time to iterate!",
            },
            {
              title: "Intégration",
              content: "We really build your site. We add animations and effects to stunt your clients and explode your conversion rate.",
            },
            {
              title: "Preliminar discussion",
              content: "Here we defined your needs. Elements required, copy and contents to show.",
            },
            {
              title: "Design and copywriting",
              content: "We create a proposed prototype for your landing page. Including design and content.",
            },
          ]}			
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
      
      <div className="projectsWrapper">
        <Project />
        <section className="project">
          <div className="project_content">
            <div className="project_content_image" style={{ backgroundImage: `url("/project2.jpg")`}} />
          </div>
        </section>
        <section className="project">
          <div className="project_content">
            <div className="project_content_image" style={{ backgroundImage: `url("/project3.jpg")`}} />
          </div>
        </section>
      </div>
{/* 
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
      </Slider> */}


      {/* <section className="section">
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
      </section> */}

    

      {/* <section className="prestations">
          <ul className="prestations_nav">
            <li>Reportages</li>
            <li>Corporate</li>
            <li>Clip musical</li>
            <li>Montage</li>
            <li>Photo d entreprise</li>
            <li>Photo d événements</li>
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
              <h2 className={syne.className}>Photo d entreprise</h2>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
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
      </section> */}

      <Slider>
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Testimonials - Testimonials -</h2>
        </div>
      </Slider>

      <div className="testimonials">
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
      
      {/* <div className="emphasedSection_content_button">
        <Image
          src="/styled_arrow.svg"
          width={58}
          height={32.8}
          alt="Arrow delimiter"
        />
        <button className="button">Parlez nous !</button>
      </div> */}

      <div className="emphasedSection">
          <div className="emphasedSection_content">
            <div>
              <h3>Racontez</h3>
              <h4>VOTRE HISTOIRE</h4>
              <p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un reportage.</p>
            </div>
            <div className="emphasedSection_content_button">
              <Image
                src="/styled_arrow.svg"
                width={58}
                height={32.8}
                alt="Arrow delimiter"
              />
              <button className="button">Parlez nous !</button>
            </div>
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
