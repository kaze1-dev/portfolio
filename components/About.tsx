"use client";

import React from "react";
import { PixelCat } from "./pixel_cat";

const About = () => {
  return (
    <section
      id="about"
      className="border-zinc-800 bg-zinc-950 px-4 py-20 text-zinc-400 sm:py-18"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me<span className="text-zinc-300">.</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="font-medium text-zinc-200">
                Full-Stack AI Engineer
              </span>{" "}
              pursuing a BS in Computer Science. I build full-stack web
              applications, backend systems, and AI-powered tools that solve
              real problems. I&apos;m currently contributing to{" "}
              <span className="font-medium text-white">ForkMesh</span>, an
              open-source project.
            </p>

            <p>
              I work mainly with Next.js, TypeScript, Python, FastAPI,
              PostgreSQL, and modern LLM technologies. I enjoy building things
              from scratch, understanding how systems work, and turning ideas
              into working software. Outside of coding, I enjoy reading
              fiction, watching classic sci-fi anime, and building side
              projects.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:justify-end">
          <div className="group relative">
            <PixelCat />

            <div
              className='absolute bottom-[68%] left-[10%] rounded-xl border border-zinc-700 bg-neutral-900/90 px-4 py-2 text-center shadow-2xl backdrop-blur-md animate-bubble-float sm:left-[15%]
                after:absolute
                after:left-[65%]
                after:top-full
                after:border-[6px]
                after:border-transparent
                after:border-t-neutral-900/90
                after:content-[""]'
            >
              <h4 className="select-none whitespace-nowrap text-xs font-semibold tracking-wide text-zinc-200 sm:text-sm">
                Hey there!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;