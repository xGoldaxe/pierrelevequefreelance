import Image from "next/image";
import Link from "next/link";

interface ContactLinksButtonsProps {
	light?: boolean;
}

export default function ContactLinksButtons({ light }: ContactLinksButtonsProps) {
  return (
    <div className="emphasedSection_content_button" style={light ? { marginTop: 0 } : {}}>
      {!light && (<Image
        src="/styled_arrow.svg"
        width={58}
        height={32.8}
        alt="Arrow delimiter"
        className="emphasedSection_content_button__arrow" 
      />)}
      <Link href="/contact">
        <button className="button">{light ? "Contact" : "Contactez moi !"}</button>
      </Link>
      <div className="emphasedSection_content_button_links">
        <Link href="https://www.linkedin.com/in/pierre-leveque-723399201/">
          <button className="button button--secondary">
            <Image
              src="/linkedin.svg"
              width={16}
              height={16}
              alt="Arrow delimiter"
            />
          </button>
        </Link>
        <Link href="https://github.com/xGoldaxe">
          <button className="button button--secondary">
            <Image
              src="/github.svg"
              width={16}
              height={16}
              alt="Arrow delimiter"
            />
          </button>
        </Link>
        <Link href="/cv.pdf" target="_blank">
          <button className="button button--secondary">
            <Image src="/cv.svg" width={16} height={16} alt="Arrow delimiter" />
          </button>
        </Link>
      </div>
    </div>
  );
}
