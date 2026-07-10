"use client"
import React from 'react';
import { PixelCat } from './pixel_cat';

const About = () => {
  return (
    <section id="about" className="bg-[#0E1117] text-zinc-400 py-20 sm:py-28 px-4 border-t border-violet-950/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            About Me<span className="text-violet-500">.</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed">
            <p>
              I am a <span className="text-violet-400 font-medium">Full-Stack AI Engineer</span>, currently pursuing my BS in Computer Science. Right now, I'm engineering intelligent systems at <span className="text-white font-medium">Tricasol</span>, where I bridge the gap between fluid user experiences and complex backend architecture. My technical toolkit centers around shipping high-performance web applications, designing scalable APIs, and seamlessly integrating advanced language models into native user workflows.
            </p>
            <p>
              My focus is heavily anchored in the intersection of robust code and cognitive systems—crafting everything from responsive frontends to vector-driven intelligent backends. Outside of development, I have a deep appreciation for analytical storytelling, whether it's found in literary fiction or classic existential sci-fi anime. I believe building great software is <span className="text-white font-medium">exactly like crafting a good narrative</span>—it requires absolute precision, pacing, and clean structure.
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