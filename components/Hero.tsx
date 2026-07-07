import React from 'react'
import { FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="bg-[#0E1117] text-slate-300 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-150 h-87.5 sm:h-150 bg-violet-900/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-6 select-none">
          Hi!, I am <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-500">Faisal</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-violet-300/90 mb-4 tracking-wide">
          AI Engineer & Full-Stack Developer 
        </h2>
        <p className="text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
          I build high-performance web applications and design intelligent automation workflows that eliminate repetitive tasks. Turning complex logic into clean, scalable code is my superpower.
        </p>
        <a
          href="mailto:kaze000111@gmail.com"
          className="inline-flex items-center space-x-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Say Hi!</span>
          <FiMail size={18} className="translate-y-[0.5px]" />
        </a>

      </div>
    </section>
  )
}

export default Hero