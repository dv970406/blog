import Link from "next/link";
import React from "react";

const NAV_TABS = [
  {
    href: "#projects",
    tabName: "Projects",
  },
  {
    href: "#career",
    tabName: "Career",
  },
  {
    href: "#contact",
    tabName: "Contact",
  },
  {
    href: "post",
    tabName: "Blog",
  },
];
const Header = () => {
  return (
    <header className="flex items-center w-full px-4 ">
      <nav className="flex flex-row justify-center w-full sm:justify-between">
        <div className="hidden sm:block"></div>

        <ul className="flex gap-14">
          {NAV_TABS.map((tab) => (
            <li key={tab.tabName}>
              {/* Link컴포넌트는 Smooth 스크롤이 작동하질 않음 */}
              <a
                href={"/" + tab.href}
                className="cursor-pointer hover:text-blue-transition"
              >
                {tab.tabName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
