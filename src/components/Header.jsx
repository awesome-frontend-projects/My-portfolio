import { navItems, socialLink } from "../constant/data";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navItems[0].id);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    setActiveLink(id);
  };
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full pt-3 z-40">
      <div className="container">
        <div className="flex items-center justify-between dark:bg-zinc-900 bg-zinc-100/80 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 backdrop-blur-lg">
          {/* Social links */}
          <div className="flex items-center gap-3.5">
            {socialLink.map((item) => (
              <a
                href="#"
                key={item.id}
                className="hover:text-emerald-600 transition-colors"
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <ul
            className={`lg:hidden absolute top-full right-6 bg-zinc-200 dark:bg-zinc-800 mt-3 p-5 min-w-36 space-y-3 rounded-lg scale-y-0 origin-top-right transition-transform ${
              isOpen ? "scale-y-100" : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`hover:text-emerald-600 transition-colors ${
                    item.id === activeLink ? "text-emerald-600" : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`text-zinc-800 dark:text-zinc-400 hover:!text-emerald-700 transition-colors ${
                    item.id === activeLink ? "!text-emerald-600" : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Btns */}
          <div className="flex items-center gap-2.5">
            <ToggleTheme />
            <button className="lg:hidden" onClick={handleClick}>
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
