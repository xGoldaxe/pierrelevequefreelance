import AboutBlock from "@/components/AboutBlock";
import Project from "@/components/Project";
import ScrollBullets from "@/components/scrollBullets";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";
import prestations from "./cms/prestations";
import { Libre_Baskerville, Syne } from "next/font/google";
import testimonialCms from "./cms/testimonials";
import emphasedSectionCms from "./cms/emphasedSection";
import Pricing from "@/components/Pricing";
import ContactLinksButtons from "@/components/ContactLinksButtons";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

export default function HomeContent() {
  return (
    <>
      <Slider>
        <div className="logoScrollSlider sliderSmallTop">
          <h2 className={syne.className}>Fullstack - </h2>
        </div>
      </Slider>

      <AboutBlock />

      <div className="process" id="prestations">
        <h2 className={`processTitle ${libreBaskerville.className}`}>
          Mes prestations
        </h2>
        <ScrollBullets elements={prestations} />
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
      </div>

      <Slider>
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Avis clients - </h2>
        </div>
      </Slider>

      <div className="testimonials" id="testimonials">
        {testimonialCms.map((testimonial, index) => (
          <Testimonial
            key={index}
            comment={testimonial.description}
            name={testimonial.name}
            title={testimonial.job}
          />
        ))}
      </div>

      <div className="pricing" id="pricing">
        <Pricing />
      </div>

      <div className="emphasedSection">
        <div className="emphasedSection_content">
          <div>
            <h3>{emphasedSectionCms.title}</h3>
            <h4>{emphasedSectionCms.subtitle}</h4>
            <p>
              {emphasedSectionCms.description}
            </p>
          </div>
          <ContactLinksButtons />
        </div>
        <div className="emphasedSection_image">
          <div className="emphasedSection_image_wrapper" style={{
            backgroundImage: `url('${emphasedSectionCms.image}')`,
            backgroundSize: "cober",
            backgroundPosition: "center",
          }}>
          </div>
        </div>
      </div>
    </>
  );
}
