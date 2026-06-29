import React from 'react';

interface PixelCatProps {
  className?: string;
}

export const PixelCat: React.FC<PixelCatProps> = ({ className = 'w-64 h-64 sm:w-72 sm:h-72' }) => {
  return (
    <div className={`relative bg-black/40 border border-violet-950/40 flex items-center justify-center p-8 rounded-2xl shadow-2xl shadow-violet-500/5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full fill-current text-[#9d7bf6]"
        shapeRendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="15" width="2" height="3" />
        <rect x="4" y="16" width="1" height="4" />
        <rect x="5" y="18" width="2" height="2" />
        <rect x="6" y="19" width="3" height="2" />
        <rect x="8" y="15" width="2" height="6" />
        <rect x="9" y="14" width="2" height="7" />
        <rect x="10" y="13" width="14" height="9" />
        <rect x="24" y="14" width="1" height="8" />
        <rect x="25" y="16" width="1" height="4" />
        <rect x="13" y="11" width="3" height="2" />
        <rect x="14" y="9" width="2" height="2" />
        <rect x="15" y="8" width="1" height="1" />
        <rect x="21" y="10" width="3" height="3" />
        <rect x="22" y="9" width="2" height="1" />
        <rect x="22" y="8" width="1" height="1" />
        <rect x="15" y="10" width="1" height="2" className="text-black fill-current" />
        <rect x="22" y="11" width="1" height="2" className="text-black fill-current" />
        <rect x="16" y="17" width="1" height="2" className="text-[#593da3] fill-current" />
        <rect x="22" y="17" width="1" height="2" className="text-[#593da3] fill-current" />
        <rect x="9" y="5" width="1" height="3" />
        <rect x="8" y="6" width="3" height="1" />
        <rect x="6" y="8" width="1" height="1" />
        <rect x="23" y="3" width="1" height="3" />
        <rect x="22" y="4" width="3" height="1" />
        <rect x="26" y="5" width="2" height="2" />
        <rect x="27" y="6" width="1" height="1" className="text-black fill-current" />
        <rect x="9" y="21" width="1" height="4" />
        <rect x="8" y="22" width="4" height="1" />
        <rect x="7" y="23" width="1" height="1" />
        <rect x="10" y="24" width="1" height="1" />
        <rect x="11" y="23" width="1" height="1" />
        <rect x="26" y="22" width="1" height="3" />
        <rect x="25" y="23" width="3" height="1" />

        <rect x="23" y="25" width="3" height="3" />
        <rect x="24" y="26" width="1" height="1" className="text-black fill-current" />
      </svg>
    </div>
  );
};

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
        <div className="flex items-center justify-center md:justify-end">
          <PixelCat />
        </div>

      </div>
    </section>
  )
}

export default About;