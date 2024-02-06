import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Libre_Baskerville } from "next/font/google";
import HomeContent from "./homeContent";

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <p>salut</p>
      {/* <Header /> */}
      {/* <div className="videoBackground">
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
      <Footer /> */}
    </main>
  );
}
