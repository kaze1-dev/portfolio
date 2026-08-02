import React from 'react'
import { FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="bg-[#090D16] text-slate-300 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-white mb-6 select-none font-sans">
          hi, <span className="text-violet-500">Faisal</span> here.
        </h1>
        <p className="text-base text-zinc-400 max-w-xl mb-10 leading-relaxed tracking-wide">
          Full-Stack AI Engineer building modern web applications and automated AI tools. I focus on writing clean, reliable, and scalable software.
        </p>
        <a
          href="mailto:kaze000111@gmail.com"
          className="inline-flex items-center space-x-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Say Hi!</span>
          <FiMail size={18} className="translate-y-[0.5px]" />
        </a>

      </div>
    </section>
  )
}

export default Hero