import React from 'react'
import { FiMail } from 'react-icons/fi'

const Hero = () => {
  //bg-[#0E1117]
  return (
    <section className="bg-[#090D16] text-slate-300 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-white mb-6 select-none font-sans">
          hi, <span className="text-violet-500">Faisal</span> here.
        </h1>
        {/* <h2 className="text-xl sm:text-2xl font-medium text-violet-300/90 mb-4 tracking-wide">
          AI Full-Stack Engineer
        </h2> */}
        <p className="text-base text-zinc-400 max-w-xl mb-10 leading-relaxed tracking-wide">
          I build high-performance web applications and design intelligent automation workflows that eliminate repetitive tasks. Turning complex logic into clean, scalable code is my superpower.
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