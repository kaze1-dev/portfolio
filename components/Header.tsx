import Link from 'next/link';
import React from 'react'
import { LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';

const Header = () => {
  return (
    <header className="bg-[#0E1117] text-violet-300 sticky top-0 z-50  transition-colors duration-300">
      <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between">

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
            href="mailto:your-email@example.com"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="Email"
          >
            <LuMail size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="GitHub"
          >
            <LuGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:bg-violet-950/40 hover:text-violet-100"
            aria-label="LinkedIn"
          >
            <LuLinkedin size={20} />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header