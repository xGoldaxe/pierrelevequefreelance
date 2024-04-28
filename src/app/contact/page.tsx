import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider, { LogoScrollSlider } from "@/components/slider";
import { Syne } from "next/font/google";
import ContactUs from "./contactUs";
import AboutBlock from "@/components/AboutBlock";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Contact() {
  return (
    <main>
      <Header />

			<ContactUs />

      <Slider>
        <LogoScrollSlider content="Fullstack" />
      </Slider>

      <AboutBlock />

      <Footer />
    </main>
  );
}
