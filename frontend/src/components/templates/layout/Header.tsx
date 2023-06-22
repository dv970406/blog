import React from "react";

const Header = () => {
  return (
    <header className="flex items-center w-full px-4">
      <nav className="flex flex-row justify-center w-full sm:justify-between">
        <div className="hidden sm:block"></div>

        <div className="flex gap-14">
          <a
            href="#projects"
            className="cursor-pointer hover:text-blue-transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="cursor-pointer hover:text-blue-transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
