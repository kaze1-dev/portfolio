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
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me<span className="text-zinc-300">.</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="font-medium text-zinc-200">
                Full-Stack &amp; AI Engineer
              </span>{" "}
              and Computer Science student focused on building web
              applications, backend systems, and AI-powered software.
            </p>

            <p>
              I work across the stack with{" "}
              <span className="font-medium text-zinc-200">
                Next.js, TypeScript, Python, FastAPI, PostgreSQL
              </span>{" "}
              and modern AI technologies. I&apos;ve built everything from
              full-stack platforms and booking systems to{" "}
              <span className="font-medium text-zinc-200">
                LLM-powered applications, RAG systems, and agentic workflows
              </span>
              .
            </p>

            <p>
              I&apos;m particularly interested in the engineering behind AI
              systems — how models, tools, APIs, data, and application
              architecture come together to build software that is actually
              useful. I&apos;m currently contributing to{" "}
              <span className="font-medium text-white">ForkMesh</span> and
              continuing to explore AI engineering and system design through
              independent projects.
            </p>

            <p className="text-zinc-500">
              Outside of coding, I enjoy reading fiction, watching classic
              sci-fi anime, and building things just because I want to
              understand how they work.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:justify-end">
          <div className="group relative">
            <PixelCat />

            <div
              className='absolute bottom-[68%] left-[10%] animate-bubble-float rounded-xl border border-zinc-700 bg-neutral-900/90 px-4 py-2 text-center shadow-2xl backdrop-blur-md sm:left-[15%]
                after:absolute
                after:left-[65%]
                after:top-full
                after:border-[6px]
                after:border-transparent
                after:border-t-neutral-900/90
                after:content-[""]'
            >
              <h4 className="select-none whitespace-nowrap text-xs font-semibold tracking-wide text-zinc-200 sm:text-sm">
                You better not be a bot!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;