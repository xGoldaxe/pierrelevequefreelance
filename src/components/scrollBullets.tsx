import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ScrollBulletsProps {
  elements: (ScrollBulletsElement & { slug: string })[];
}

interface ScrollBulletsElement {
  title: string;
  description: string;
}

export default function ScrollBullets({ elements }: ScrollBulletsProps) {
  return (
    <div className="scrollBullets">
      <div className="scrollBullets_container">
        {elements.map((element, i) => {
          const specialClassName =
            i + 1 === elements.length ? "scrollBullets__point--last" : "";
          return (
            <Link
              href={`/prestation/${element.slug}`}
              className={`scrollBullets__point ${specialClassName}`}
              key={element.title}
            >
              <div className="flex center scrollBullets__right__image">
                <Point />
              </div>
              <ScrollBulletPoint
                title={element.title}
                description={element.description}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Point() {
  return <div className="scrollBullets__point_point"></div>;
}

function ScrollBulletPoint({ title, description }: ScrollBulletsElement) {
  return (
    <div className="scrollBulletPoint">
      <h4>{title}</h4>
      <p>{description}</p>
      <Image
        src="/styled_arrow.svg"
        width={58}
        height={32.8}
        alt="Arrow delimiter"
      />
    </div>
  );
}
