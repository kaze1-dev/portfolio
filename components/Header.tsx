import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950 text-white transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="cursor-pointer select-none text-lg font-bold tracking-wide text-white transition hover:text-zinc-300">
            Faisal Abbas
          </div>

          <nav className="hidden items-center space-x-4 md:flex">
            <Link
              href="/#home"
              className="rounded-lg text-sm font-black text-zinc-400 transition-all duration-200 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="rounded-lg text-sm font-black text-zinc-400 transition-all duration-200 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="rounded-lg text-sm font-black text-zinc-400 transition-all duration-200 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg text-sm font-black text-zinc-400 transition-all duration-200 hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="mailto:kaze0001111@gmail.com"
            className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:text-white"
            aria-label="Email"
          >
            <HiMail size={20} />
          </a>
          <a
            href="https://github.com/kaze1-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:text-white"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal-abbas-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:text-white"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;