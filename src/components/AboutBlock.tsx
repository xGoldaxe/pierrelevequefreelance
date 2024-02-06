import aboutCms from "@/app/cms/about";
import Image from "next/image";
import Link from "next/link";

export default function AboutBlock() {
  return (
    <div className="about">
      <div className="about_image" id="about">
        <Image
          src={aboutCms.image}
          width={300}
          height={485}
          alt="Clement photo"
        />
      </div>
      <div className="about_content">
        <div className="about_text">
          <p className="paragraph">{aboutCms.firstParagraph}</p>
          <p className="paragraph">{aboutCms.secondParagraph}</p>
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
