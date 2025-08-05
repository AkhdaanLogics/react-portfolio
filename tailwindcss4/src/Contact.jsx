import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

function Contact() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center space-x-4 text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>makhdaan7@gmail.com</span>
          </div>
        </div>
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Akhdaan The Great. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d76f78] duration-300 transform hover:scale-110"
          >
            <FaDiscord size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
