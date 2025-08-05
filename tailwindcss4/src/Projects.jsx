import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaPython,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import { SiThreedotjs, SiTailwindcss } from "react-icons/si";
import Marquee from "react-fast-marquee";
import ProjectsCard from "./ProjectsCard";
import { gsap } from "gsap";
import notetifyImg from "./assets/notetify.png";

const projectsData = [
  {
    title: "Notetify",
    description:
      "Notetify is a fun and creative web application that transforms your personal notes or lists into a receipt-style format, giving them a unique and aesthetic look.",
    image: notetifyImg,
    githubLink: "",
    websiteLink: "https://mynotetify.vercel.app/",
  },
  
  {
    title: "Notetify",
    description:
      "Notetify is a fun and creative web application that transforms your personal notes or lists into a receipt-style format, giving them a unique and aesthetic look.",
    image: notetifyImg,
    githubLink: "",
    websiteLink: "https://mynotetify.vercel.app/",
  },
  
  {
    title: "Notetify",
    description:
      "Notetify is a fun and creative web application that transforms your personal notes or lists into a receipt-style format, giving them a unique and aesthetic look.",
    image: notetifyImg,
    githubLink: "",
    websiteLink: "https://mynotetify.vercel.app/",
  },
  
  {
    title: "Notetify",
    description:
      "Notetify is a fun and creative web application that transforms your personal notes or lists into a receipt-style format, giving them a unique and aesthetic look.",
    image: notetifyImg,
    githubLink: "",
    websiteLink: "https://mynotetify.vercel.app/",
  },
  
  {
    title: "Notetify",
    description:
      "Notetify is a fun and creative web application that transforms your personal notes or lists into a receipt-style format, giving them a unique and aesthetic look.",
    image: notetifyImg,
    githubLink: "",
    websiteLink: "https://mynotetify.vercel.app/",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full min-h-screen p-4"
    >
      <p className="text-4xl md:text-6xl font-bold mb-8 text-black text-center">
        MY PROJECTS
      </p>
      <p className="text-sm md:text-md font-medium text-gray-600 mb-6 text-center px-2">
        Here are some of the technologies I work with:
      </p>
      <div className="w-full md:w-3/4 text-3xl md:text-4xl mb-8">
        <Marquee>
          <FaHtml5 className="text-orange-500 mr-8" />
          <FaCss3Alt className="text-blue-500 mr-8" />
          <FaJsSquare className="text-yellow-400 mr-8" />
          <FaReact className="text-cyan-400 mr-8" />
          <FaBootstrap className="text-blue-500 mr-8" />
          <FaPython className="text-yellow-500 mr-8" />
          <FaLaravel className="text-red-400 mr-8" />
          <SiThreedotjs className="text-gray-400 mr-8" />
          <SiTailwindcss className="text-blue-400 mr-8" />
          <FaGithub className="text-gray-800 mr-8" />
        </Marquee>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-4 px-2">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
