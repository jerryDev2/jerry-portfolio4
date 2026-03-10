import React from "react";
import logo from "../assets/img/jerry-logo.png";

function Footer() {
  return (
    <footer className="bg-[#0b0014] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Jerry logo" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-semibold">Jerry Dev</h3>
            <p className="text-sm text-gray-300 hidden sm:block">
              SoftWare Engineer — crafting delightful sofware experiences
            </p>
          </div>
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="#about-me"
            className="text-sm hover:text-pink-400 transition-colors"
          >
            About Me
          </a>
          <a
            href="#service"
            className="text-sm hover:text-pink-400 transition-colors"
          >
            My Service
          </a>
          <a
            href="#projects"
            className="text-sm hover:text-pink-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact-me"
            className="text-sm hover:text-pink-400 transition-colors"
          >
            Contact Me
          </a>
        </nav>

        <div className="flex flex-col items-center md:items-end text-sm text-gray-300">
          
          <div className="flex gap-3 ">
            {/* GitHub */}
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="hover:text-pink-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.12a10.7 10.7 0 012.8-.38c.95 0 1.91.13 2.8.38 2.14-1.42 3.08-1.12 3.08-1.12.61 1.54.23 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.12 0 .29.2.64.77.53 4.44-1.49 7.64-5.66 7.64-10.6C23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              className="hover:text-pink-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8H4.8V24H.2zM8.98 8H13.2v2.16h.07c.6-1.13 2.07-2.32 4.26-2.32C23.02 7.84 24 10.07 24 13.46V24h-4.6v-9.1c0-2.17-.78-3.65-2.72-3.65-1.48 0-2.36 1-2.75 1.96-.14.34-.17.82-.17 1.3V24H8.98z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="hover:text-pink-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.98 4.98 0 002.17-2.75 9.93 9.93 0 01-3.16 1.2 4.94 4.94 0 00-8.42 4.5A14 14 0 011.67 3.15a4.93 4.93 0 001.53 6.58 4.9 4.9 0 01-2.24-.62v.06a4.95 4.95 0 003.95 4.84 4.96 4.96 0 01-2.22.08 4.95 4.95 0 004.62 3.43A9.9 9.9 0 010 20.45a13.98 13.98 0 007.56 2.21c9.06 0 14.03-7.5 14.03-14 0-.21 0-.41-.02-.62A10.02 10.02 0 0024 4.56z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a0028] mt-4 pt-4">
        <p className="text-center text-xs text-gray-400 pb-4 max-w-6xl mx-auto px-4">
          &copy; 2024 Jerry Dev. All rights reserved | Design & Developed by
          Jerry Dev
        </p>
      </div>
    </footer>
  );
}

export default Footer;
