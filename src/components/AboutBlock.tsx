import aboutCms from "@/app/cms/about";
import ContactLinksButtons from "./ContactLinksButtons";

export default function AboutBlock() {
  return (
    <div className="about">
      <div
        className="about_image"
        id="about"
        style={{
          background: `url('${aboutCms.image}')`,
          backgroundPosition: "center",
          backgroundOrigin: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="about_content">
        <div className="about_text">
          <p className="paragraph">{aboutCms.firstParagraph}</p>
          <p className="paragraph">{aboutCms.secondParagraph}</p>
        </div>
         <ContactLinksButtons />
      </div>
    </div>
  );
}
