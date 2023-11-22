import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/slider";
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
        <div className="logoScrollSlider">
          <h2 className={syne.className}>Black Stories - </h2>
        </div>
      </Slider>

      <AboutBlock />

      <Footer />
    </main>
  );
}
