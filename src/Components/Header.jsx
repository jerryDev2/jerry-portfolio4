import React, { useState } from "react";
import logo from "../assets/img/jerry-logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about-me", label: "About Me" },
    { href: "#service", label: "My Service" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-me", label: "Contact Me" },
  ];

  return (
    <div className="bg-[#150029] relative w-full">
      <header className="bg-[#150029cf] fixed backdrop-blur-[5px] top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-20 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Jerry logo" className="w-8 md:w-10" />
            <span className="text-white font-semibold hidden sm:inline">
              Jerry
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-6 text-white text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {/* hamburger / close icon */}
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-[#12001f] border-t border-[#2a003f]">
            <ul className="flex flex-col gap-2 text-white p-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-[#230033] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
