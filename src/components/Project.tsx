"use client";

import { Libre_Baskerville } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Project() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [currentText, setCurrentText] = useState(0);
  const [hasBeenChanged, setHasBeenChanged] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setCurrentText(parseInt(entry.target.id));
            setHasBeenChanged(true);
          }
        });
      },
      { threshold: 0.5 }
    ); // 1.0 means fully in view

    if (targetRef.current) {
      // get all direct children of the target
      const children = targetRef.current.children;
      for (const child of children) {
        observer.observe(child);
      }
    }

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <section className="project">
      <div className="projects">
        <ProjectDescription
          text="Project 1"
          shouldAppear={hasBeenChanged && currentText === 0}
        />
        <ProjectDescription
          text="Project 2"
          shouldAppear={hasBeenChanged && currentText === 1}
        />
        <ProjectDescription
          text="Project 3"
          shouldAppear={hasBeenChanged && currentText === 2}
        />
      </div>

      <div ref={targetRef}>
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/project.jpg")` }}
          id="0"
        />
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/project2.jpg")` }}
          id="1"
        />
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/project3.jpg")` }}
          id="2"
        />
      </div>
    </section>
  );
}

interface ProjectDescriptionProps {
  text: string;
  shouldAppear: boolean;
}

function ProjectDescription({
  text,
  shouldAppear,
}: ProjectDescriptionProps) {
  const animationDuration = 500;

  const [isHidden, setIsHidden] = useState(false);
  const [previousShouldAppear, setPreviousShouldAppear] = useState(shouldAppear);

  if (previousShouldAppear !== shouldAppear) {
    setPreviousShouldAppear(shouldAppear);
    setTimeout(() => {
      setIsHidden(!shouldAppear);
    }, animationDuration);
  }

  if (isHidden) {
    return <></>;
  }

  return (
    <div className="project_content_inner">
      <div
        className="project_content_description"
        style={{ animation: shouldAppear ? `blur-text ease-in-out ${animationDuration}ms` : `blur-text-hide ease-in-out ${animationDuration}ms` }}
      >
        <h2 className={libreBaskerville.className}>Project Name</h2>
        <p>{text}</p>
        <p>
          Racontez votre histoire avec un reportage. Une méthode de
          communication particulièrement efficace et engageante. Cette approche
          combine les avantages de l interview et la puissance de l immersion
          journalistique, Racontez votre histoire avec un rep
        </p>
      </div>
      <div className="project_details">
        <p className="project_details_label">Date de production</p>
        <p className="project_details_label">Type de projet</p>
        <p className="project_details_label">Client</p>
        <div className="project_details_line"></div>
        <p className="project_details_value">2023</p>
        <p className="project_details_value">
          Réalisation vidéo pour entreprise
        </p>
        <p className="project_details_value">Johndoecorporation</p>
      </div>
    </div>
  );
}
