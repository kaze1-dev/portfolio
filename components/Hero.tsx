import React from 'react';
import { FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-4 text-zinc-300">
      <div className="z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="mb-6 select-none font-sans text-5xl font-extrabold text-white sm:text-7xl md:text-7xl">
          hi, <span className="text-zinc-300">Faisal</span> here
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed tracking-wide text-zinc-400">
          Full-Stack & AI Engineer building web applications, backend systems, and
          AI-powered tools with Next.js, Python, FastAPI, and LLMs.
        </p>

        <a
          href="mailto:kaze000111@gmail.com"
          className="inline-flex items-center space-x-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200 active:translate-y-0"
        >
          <span>Say Hi!</span>
          <FiMail size={18} className="translate-y-[0.5px]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;