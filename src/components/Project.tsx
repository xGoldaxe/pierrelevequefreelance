"use client";

import projects, { CmsProject } from "@/app/cms/projects";
import useTimeout from "@/app/hooks/useTimeout";
import { Libre_Baskerville } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Project() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentText(parseInt(entry.target.id));
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
        <ProjectDescription project={projects[currentText]} />
      </div>

      <div ref={targetRef}>
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/dptracker.png")`, backgroundPosition: "left" }}
          id="0"
        />
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/webserv.png")`, backgroundPosition: "left" }}
          id="1"
        />
        <div
          className="project_content_image"
          style={{ backgroundImage: `url("/pong.png")` }}
          id="2"
        />
      </div>
    </section>
  );
}

interface ProjectDescriptionProps {
  project: CmsProject;
}

function ProjectDescription({ project }: ProjectDescriptionProps) {
  const animationDuration = 500;

  const [currentProject, setCurrentProject] = useState(project);
  const animationTimer = useTimeout();

  const isAnimating = currentProject.id !== project.id;

  useEffect(() => {
    if (isAnimating) {
      animationTimer(animationDuration, () => {
        setCurrentProject(project);
      });
    }
  }, [project.id]); // in useEffect to avoid infinite rendering loop due to timer state change

  const animationStyle = {
    filter: isAnimating ? "blur(4px)" : "blur(0px)",
    opacity: isAnimating ? 0 : 1,
  };

  return (
    <div className="project_content_inner">
      <div className="project_content_description" style={animationStyle}>
        <h2 className={libreBaskerville.className}>{currentProject.name}</h2>
        {currentProject.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="project_details" style={animationStyle}>
        <p className="project_details_label">Date de production</p>
        <p className="project_details_label">Type de projet</p>
        <p className="project_details_label">Client</p>
        <div className="project_details_line"></div>
        <p className="project_details_value">{currentProject.year}</p>
        <p className="project_details_value">{currentProject.type}</p>
        <p className="project_details_value">{currentProject.client}</p>
      </div>
    </div>
  );
}
