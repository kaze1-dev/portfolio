import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="bg-[#0E1117] text-violet-300 sticky top-0 z-50  transition-colors duration-300">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">

        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold tracking-wide text-violet-400 cursor-pointer select-none">
            Faisal Abbas<span className="text-violet-100">.</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="#home" className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100">
              Home
            </Link>
            <Link href="#projects" className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100">
              Projects
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-1">
          <a
            href="mailto:kaze0001111@gmail.com"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="Email"
          >
            <HiMail size={20} />
          </a>
          <a
            href="https://github.com/kaze1-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header