"use client"
import React from 'react'
import { LuArrowUp, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1117] text-zinc-500 py-8 px-4 border-t border-violet-950/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-center sm:text-left">
            <div className="font-bold text-white tracking-wide select-none">
              Faisal Abbas<span className="text-violet-500">.</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <p className="text-xs text-zinc-600">
              &copy; 2026 All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kaze1-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuLinkedin size={16} />
            </a>
            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuMail size={16} />
            </a>
          </div>
        </div >

        <div className="flex items-center justify-between border-t border-violet-950/20 pt-4">
          <p className="text-xs text-zinc-600 select-none">
            Built with Next.js & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-violet-400 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200 group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <LuArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div >
    </footer >
  )
}

export default Footer