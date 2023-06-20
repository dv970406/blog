import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center w-full px-4">
      <nav className="flex flex-row justify-center w-full sm:justify-between">
        <div className="hidden sm:block"></div>

        <div className="flex gap-14">
          <Link href={"/"} className="hover:text-darkgray-transition">
            Projects
          </Link>
          <Link href={"/"} className="hover:text-darkgray-transition">
            Contact
          </Link>
          <Link href={"/"} className="hover:text-darkgray-transition">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
