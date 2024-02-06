import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Libre_Baskerville } from "next/font/google";
import HomeContent from "./homeContent";
import featuresCms from "./cms/features";

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
        {featuresCms.map((feature) => (
          <div className="keyNumbers_container" key={feature.title}>
            <p
              className={`keyNumbers_container_number ${libreBaskerville.className}`}
            >
              {feature.amount}
            </p>
            <p className="keyNumbers_container_label">{feature.title}</p>
          </div>
        ))}
      </div>
      <HomeContent />
      <Footer />
    </main>
  );
}
