"use client";

import React from "react";
import { LuBriefcase, LuArrowUpRight } from "react-icons/lu";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "ForkMesh",
      role: "Open Source Contributor",
      period: "Aug 2026 — Present",
      description:
        "Contributing to an open-source project by building features, improving existing functionality, and working with modern software engineering practices.",
      link: "https://github.com/ForkMesh",
    },
    {
      company: "Tricasol",
      role: "AI Engineer Intern",
      period: "Jun 2026 — Aug 2026",
      description:
        "Built AI-powered systems and backend services, including a WhatsApp customer support agent integrating LLM workflows with business systems.",
    },
  ];

  return (
    <section
      id="experience"
      className="border-zinc-800 bg-zinc-950 px-4 py-20 text-zinc-400 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience<span className="text-zinc-300">.</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-zinc-500">
            Where I&apos;ve worked, contributed, and gained hands-on
            engineering experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-8px)] w-px bg-zinc-800 sm:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative sm:pl-12">
                <div className="absolute left-0 top-1.5 hidden h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 sm:flex">
                  <div className="h-2 w-2 rounded-full bg-zinc-400" />
                </div>

                <div className="group rounded-2xl border border-zinc-800 bg-black/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-black/40 sm:p-7">
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <LuBriefcase
                          size={18}
                          strokeWidth={1.5}
                          className="text-zinc-400"
                        />

                        {experience.link ? (
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 font-bold text-white transition-colors hover:text-zinc-300"
                          >
                            {experience.company}
                            <LuArrowUpRight size={14} />
                          </a>
                        ) : (
                          <h3 className="font-bold text-white">
                            {experience.company}
                          </h3>
                        )}
                      </div>

                      <p className="text-sm font-medium text-zinc-300">
                        {experience.role}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-mono text-zinc-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;