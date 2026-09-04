"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  LuArrowRight,
  LuExternalLink,
  LuFolder,
  LuPlay,
  LuX,
} from "react-icons/lu";

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubLink: string | null;
  liveLink: string | null;
  videoUrl?: string | null;
  inProgress?: boolean;
  caseStudyUrl?: string | null;
};

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  const projects: Project[] = [
    {
      title: "InsightAI — AI-Powered Business Analytics Platform",
      description:
        "An AI-powered business analytics platform that turns sales, customer, order, and product data into interactive dashboards and AI-generated insights for faster decision-making.",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Better-Auth",
        "TanStack Query",
        "Recharts",
        "Python",
        "FastAPI",
        "LangGraph",
        "LangChain",
      ],
      githubLink: "https://github.com/kaze1-dev/Analytics_Dashboard",
      liveLink: "https://analytics-dashboard-nu-mocha.vercel.app/",
      inProgress: true,
    },

    {
      title: "ScoutAI — Autonomous Web Research Agent",
      description:
        "An autonomous research agent that decomposes complex questions, researches the web through MCP tools, synthesizes evidence, and streams its execution in real time.",
      tags: [
        "Python",
        "FastAPI",
        "LangGraph",
        "LangChain",
        "MCP",
        "SSE",
        "Next.js",
      ],
      githubLink: "https://github.com/kaze1-dev/research-agent",
      liveLink: null,
      inProgress: true,
      caseStudyUrl: "/projects/scoutai",
    },

    {
      title: "AI Customer Support Assistant",
      description:
        "A WhatsApp AI support agent that connects directly to WHMCS to automate hosting, domain, invoice, and support workflows—turning customer conversations into actionable operations.",
      tags: [
        "Python",
        "FastAPI",
        "LangGraph",
        "LangChain",
        "WHMCS",
        "Evolution API",
        "Docker",
      ],
      githubLink: "https://github.com/kaze1-dev/tricasol",
      liveLink: null,
      videoUrl:
        "https://res.cloudinary.com/oriqovwt/video/upload/v1786431414/customer-support-agent_otqh4v.mp4",
      caseStudyUrl: "/projects/whatsapp-agent",
    },

    {
      title: "GoRoom — Multi-Hotel Booking Platform",
      description:
        "A multi-hotel booking platform powering online reservations across 9 hotels, with room availability and a private manager dashboard for bookings, revenue, and occupancy.",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "better-auth",
        "TanStack Query",
        "Tailwind CSS",
      ],
      githubLink: null,
      liveLink: "https://www.goroom.pk",
      caseStudyUrl: "/projects/goroom",
    },
  ];

  const ProjectCard = ({
    project,
    compact,
  }: {
    project: Project;
    compact: boolean;
  }) => (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-black/40 ${compact ? "p-5 sm:p-6" : "p-6 sm:p-7"
        }`}
    >
      {project.caseStudyUrl && (
        <Link
          href={project.caseStudyUrl}
          className="absolute inset-0 z-0 rounded-2xl"
          aria-label={`View ${project.title} case study`}
        />
      )}

      <div>
        <div className="relative z-10 mb-6 flex items-center justify-between">
          <div className="text-zinc-300 transition-colors duration-300 group-hover:text-white">
            <LuFolder size={compact ? 24 : 28} strokeWidth={1.5} />
          </div>

          <div className="flex items-center gap-2 space-x-3 text-zinc-500">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="mr-1 flex items-center gap-1 rounded border border-zinc-700 bg-white/5 px-2.5 py-1 text-[10px] font-mono font-semibold text-zinc-300 transition-colors group-hover:border-zinc-500 group-hover:text-white"
                aria-label={`View ${project.title} case study`}
              >
                Case Study
                <LuArrowRight size={10} />
              </Link>
            )}

            {project.inProgress && (
              <span className="mr-1 select-none rounded-full border border-zinc-700 bg-white/5 px-2 py-0.5 text-[10px] font-mono font-semibold text-zinc-300">
                In Progress
              </span>
            )}

            {project.videoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(project.videoUrl!);
                }}
                className="relative z-10 mr-1 flex items-center gap-1.5 rounded-md border border-zinc-700 bg-white/5 px-2.5 py-1 text-[11px] font-mono font-semibold text-zinc-300 shadow-sm transition-all duration-200 hover:border-zinc-500 hover:text-white"
                aria-label="Watch Demo Video"
              >
                <LuPlay size={12} className="fill-zinc-300/20" />
                DEMO
              </button>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 transition-colors duration-200 hover:text-white"
                aria-label="GitHub Repository"
              >
                <BsGithub size={compact ? 18 : 20} />
              </a>
            )}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 transition-colors duration-200 hover:text-white"
                aria-label="Live Website"
              >
                <LuExternalLink size={compact ? 18 : 20} />
              </a>
            )}
          </div>
        </div>

        <h3
          className={`mb-3 font-bold text-white transition-colors duration-300 group-hover:text-zinc-200 ${compact ? "text-lg" : "text-xl"
            }`}
        >
          {project.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-zinc-500">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="select-none rounded border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-300 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-zinc-800 bg-zinc-950 px-4 py-20 text-zinc-400 sm:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-100 w-100 rounded-full bg-white/5 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects<span className="text-zinc-300">.</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-zinc-500">
            A selection of production systems and personal projects I&apos;ve
            built.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} compact={false} />
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 bg-black/40 px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                System Demo Playback
              </span>

              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-lg p-1 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close modal"
              >
                <LuX size={20} />
              </button>
            </div>

            <div className="flex aspect-video items-center justify-center bg-black">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;