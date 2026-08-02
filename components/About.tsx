"use client"
import React from 'react';
import { PixelCat } from './pixel_cat';

const About = () => {
  return (
    <section id="about" className="bg-[#090D16] text-zinc-400 py-20 sm:py-18 px-4 border-t border-violet-950/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            About Me<span className="text-violet-500">.</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed">
            <p>
              I am a <span className="text-violet-400 font-medium">Full-Stack AI Engineer</span> pursuing my BS in Computer Science and working at <span className="text-white font-medium">Tricasol</span>. I build modern web applications, design clean backend APIs, and integrate practical AI agents into real-world software.
            </p>
            <p>
              Whether I'm crafting responsive user interfaces with Next.js or building RAG pipelines with Python and FastAPI, my focus is on writing clean, efficient, and reliable code. Outside of software development, I enjoy reading fiction, watching classic sci-fi anime, and building side projects.
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center md:justify-end w-full'>
          <div className='relative group'>
            
            <PixelCat />
            
            <div className='absolute bottom-[68%] left-[10%] sm:left-[15%] bg-neutral-900/90 backdrop-blur-md border border-violet-500/30 rounded-xl px-4 py-2 text-center shadow-2xl animate-bubble-float
              after:content-[""] 
              after:absolute 
              after:top-full 
              after:left-[65%] 
              after:border-[6px] 
              after:border-transparent 
              after:border-t-neutral-900/90'>
              <h4 className='text-violet-400 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap select-none'>
                Hey there! 🐾
              </h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About;