import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function About() {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-2 items-start justify-center min-h-screen m-4"
    >
      <div ref={textRef} className="my-auto mx-4 md:mr-6">
        <p className="text-4xl md:text-6xl font-bold mb-4 text-black">
          ABOUT ME
        </p>
        <div className="w-full max-w-2xl">
          <p className="text-sm md:text-md font-medium text-gray-600 mb-6 leading-relaxed">
            <span className="text-[#d76f78] font-bold">Muhammad Akhdaan</span>{" "}
            was born in 2005 and is currently a student at the Amikom University
            Yogyakarta, majoring in Informatics. He is a web developer with a
            passion for creating dynamic and responsive web applications. With a
            strong foundation in HTML, CSS, and JavaScript, he strives to build
            user-friendly interfaces that enhance the overall user experience.
            He starts his journey in web development in 2022, and since then, he
            has been continuously learning and improving his skills. He is
            always eager to take on new challenges and collaborate on exciting
            projects.
            <span className="text-[#d76f78] font-bold"> Akhdaan</span> also
            interested in Machine Learning and AI, and he is currently exploring
            these fields to expand his knowledge and skills. He believes that
            technology has the power to change the world, and he is committed to
            using his skills to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
