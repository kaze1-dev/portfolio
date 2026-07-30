import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="bg-[#090D16] text-violet-300 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">

        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold tracking-wide text-gray-300 hover:text-violet-500 transition cursor-pointer select-none">
            Faisal Abbas<span className="text-violet-100"></span>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#home" className="rounded-lg text-sm font-black transition-all duration-200 text-slate-300 hover:text-violet-500">
              Home
            </Link>
            <Link href="#projects" className="rounded-lg text-sm font-black transition-all duration-200 text-slate-300 hover:text-violet-500">
              Projects
            </Link>
            <Link href="#about" className="rounded-lg text-sm font-black transition-all duration-200 text-slate-300 hover:text-violet-500">
              About
            </Link>
            <Link href="#contact" className="rounded-lg text-sm font-black transition-all duration-200 text-slate-300 hover:text-violet-500">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="mailto:kaze0001111@gmail.com"
            className="p-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-violet-400"
            aria-label="Email"
          >
            <HiMail size={20} />
          </a>
          <a
            href="https://github.com/kaze1-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-violet-400"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal-abbas-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-violet-400"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/923316855008"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-violet-400"
            aria-label="WhatsApp"
          >
            <BsWhatsapp size={20} />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header