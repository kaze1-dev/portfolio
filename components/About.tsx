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
              I am a <span className="text-violet-400 font-medium">Full-Stack Developer and AI Automation Engineer</span>, currently pursuing my BS in Computer Science. Right now, I'm sharpening my engineering skills as an <span className="text-white font-medium">intern at Tricasol</span>, where I bridge the gap between fluid user experiences and complex backend logic. My technical toolkit centers around building robust full-stack applications and designing intelligent, automated workflows using <span className="text-violet-400 font-medium">Python and n8n</span>.
            </p>
            <p>
              My focus is heavily anchored in the intersection of structured code and machine intelligence, constantly finding ways to optimize workflows and eliminate repetitive tasks. Outside of development, I have a deep appreciation for analytical storytelling, whether it's found in literary fiction or classic existential sci-fi anime. I believe building great software is <span className="text-white font-medium">exactly like crafting a good narrative</span>—it requires absolute precision, pacing, and clean structure.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center md:justify-end">
          <PixelCat />
        </div> */}
        <div className='flex items-center justify-center md:justify-end'>
          <PixelCat />
        </div>
      </div>
    </section>
  )
}

export default About;