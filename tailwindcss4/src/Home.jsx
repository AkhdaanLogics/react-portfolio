import { useState, useEffect, useRef } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { gsap } from "gsap";

function Home() {
  const initialLines = [
    <TerminalOutput key="welcome">Welcome to my Portfolio!</TerminalOutput>,
    <TerminalOutput key="intro">
      Type 'help' for a list of commands.
    </TerminalOutput>,
    <TerminalOutput key="hint">Press Enter to submit.</TerminalOutput>,
  ];

  const [terminalLineData, setTerminalLineData] = useState(initialLines);
  const textRef = useRef(null);

  const handleInput = (terminalInput) => {
    const input = terminalInput.trim().toLowerCase();
    console.log(`New terminal input received: '${input}'`);

    let response;

    switch (input) {
      case "help":
        response = `Available commands:
        - help      : Show this help menu
        - about     : Learn more about me
        - projects  : View my projects
        - contact   : Get my contact information
        - clear     : Clear the terminal`;
        break;

      case "about":
        response =
          "Hi, I'm Akhdaan. A passionate web developer who loves \ncreating amazing user experiences!";
        break;

      case "projects":
        response =
          "You can click on the 'Projects' section to view my work.";
        break;

      case "contact":
        response =
          "You can reach me at:\nEmail: makhdaan7@gmail.com\nGitHub: github.com/AkhdaanLogics";
        break;

      case "clear":
        setTerminalLineData([]);
        return;

      default:
        response = `Command not recognized: '${input}'. Type 'help' to see available commands.`;
        break;
    }

    setTerminalLineData((prev) => [
      ...prev,
      <TerminalOutput key={prev.length}>$ {terminalInput}</TerminalOutput>,
      <TerminalOutput key={prev.length + 1}>{response}</TerminalOutput>,
    ]);
  };

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-2"
    >
      <div
        className="rounded-lg overflow-hidden shadow-[0px_0px_45px_-15px_#d76f78] w-full md:w-[650px] h-[400px] md:h-[500px] my-auto mx-auto"
      >
        <Terminal
          name="Akhdaan's Prompt"
          colorMode={ColorMode.Light}
          onInput={handleInput}
        >
          {terminalLineData}
        </Terminal>
      </div>

      <div
        ref={textRef}
        className="flex flex-col justify-start my-auto mx-4 md:mr-6"
      >
        <p className="text-black font-bold text-4xl md:text-6xl">
          MUHAMMAD AKHDAAN
        </p>
        <p className="text-[#d76f78] font-bold mt-2 text-base md:text-lg">
          Web Developer
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-md font-medium leading-relaxed">
          <span className="text-[#d76f78] font-bold">Muhammad Akhdaan</span>, a
          passionate web developer with a keen interest in creating dynamic and
          responsive web applications. With a strong foundation in HTML, CSS,
          and JavaScript, I strive to build user-friendly interfaces that
          enhance the overall user experience. Contact me to collaborate on
          exciting projects or to learn more about my work.
        </p>
        <div className="flex space-x-4 mt-4 text-gray-600 text-lg font-medium">
          <a
            href="https://github.com/AkhdaanLogics"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href=""
            target="_blank"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/m.akhdaan__"
            target="_blank"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://discord.com/users/491893610309222400"
            target="_blank"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <i className="bi bi-discord"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
