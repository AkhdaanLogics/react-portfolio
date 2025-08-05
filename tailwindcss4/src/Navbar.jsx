import { useState } from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-center p-4 bg-[#dddddd]">
        <div className="space-x-22 text-lg text-black font-medium">
          <a href="#home" className="hover:text-[#d76f78] duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-[#d76f78] duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-[#d76f78] duration-300">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
