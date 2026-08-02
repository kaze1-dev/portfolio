"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { LuExternalLink, LuFolder, LuPlay, LuX, LuArrowRight } from 'react-icons/lu'

type Project = {
  title: string
  description: string
  tags: string[]
  githubLink: string | null
  liveLink: string | null
  videoUrl?: string | null
  inProgress?: boolean
  client?: boolean
  caseStudyUrl?: string | null
}

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  const projects: Project[] = [
    {
      title: "Business AI Customer Support Agent",
      description: "An automated WhatsApp assistant integrated with WHMCS that handles client support, manages domains and hosting services, checks invoices, and resolves technical tickets in real-time.",
      tags: ["FastAPI", "LangChain", "WHMCS", "Evolution API", "Docker"],
      githubLink: "https://github.com/kaze1-dev/tricasol",
      liveLink: null,
      videoUrl: "https://res.cloudinary.com/oriqovwt/video/upload/v1783369789/0706_1_x2ek1f.mp4",
      client: true,
      caseStudyUrl: "/projects/whatsapp-agent" 
    },
    {
      title: "GoRoom — Multi-Hotel Booking Platform",
      description: "A hotel booking platform built for a client managing 8 properties on a unified system, featuring fast search filters, secure accounts, and online reservations.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "better-auth", "Tailwind CSS", "TanStack Query"],
      githubLink: null,
      liveLink: "https://www.goroom.pk",
      inProgress: false,
      client: true,
      caseStudyUrl: "/projects/goroom" 
    },
    {
      title: "Analytics Dashboard",
      description: "A full-stack admin panel for online stores to manage inventory, track live sales performance, and analyze store data with interactive charts.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query", "NextAuth", "Recharts"],
      githubLink: "https://github.com/kaze1-dev/Analytics_Dashboard",
      liveLink: "https://analytics-dashboard-nu-mocha.vercel.app/",
      inProgress: true
    },
    
    {
      title: "Pixel Cat — Portfolio AI Assistant",
      description: "An interactive AI assistant embedded on this site that answers visitor and client questions about my background, projects, and technical skills in real time.",
      tags: ["Python", "FastAPI", "LangChain", "RAG"],
      githubLink: "https://github.com/kaze1-dev/pixel",
      liveLink: null
    },
    
  ];

  const miniProjects: Project[] = [
    {
      title: "Hotel Haven Lahore",
      description: "A responsive promotional website built for a hotel in Lahore.",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: null,
      liveLink: "https://haven-hotel-lahore.vercel.app/",
      client: true
    },
    {
      title: "Go Guest House Lahore",
      description: "A clean landing page and showcase site for a local guest house.",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: null,
      liveLink: "https://guest-house-roan.vercel.app/",
      client: true
    }
  ];

  const ProjectCard = ({ project, compact }: { project: Project; compact: boolean }) => (
    <div
      className={`bg-black/20 border border-violet-950/30 ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-7'} rounded-2xl transition-all duration-300 hover:border-violet-500/40 hover:bg-black/40 group flex flex-col justify-between hover:-translate-y-1 relative`}
    >
      {/* Invisible overlay link for card clickability */}
      {project.caseStudyUrl && (
        <Link
          href={project.caseStudyUrl}
          className="absolute inset-0 z-0 rounded-2xl"
          aria-label={`View ${project.title} case study`}
        />
      )}

      <div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
            <LuFolder size={compact ? 24 : 28} strokeWidth={1.5} />
          </div>

          <div className="flex items-center space-x-3 gap-2 text-zinc-500">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300 select-none mr-1 flex items-center gap-1 group-hover:border-violet-400 transition-colors"
                aria-label={`View ${project.title} case study`}
              >
                Case Study <LuArrowRight size={10} />
              </Link>
            )}
            {project.inProgress && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 select-none mr-1">
                In Progress
              </span>
            )}
            {project.videoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(project.videoUrl!);
                }}
                className="hover:text-violet-400 hover:border-violet-500/40 transition-all duration-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-md text-violet-300 mr-1 shadow-sm shadow-violet-950/20 relative z-10"
                aria-label="Watch Demo Video"
              >
                <LuPlay size={12} className="fill-violet-400/20" /> DEMO
              </button>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-violet-400 transition-colors duration-200 relative z-10"
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
                className="hover:text-violet-400 transition-colors duration-200 relative z-10"
                aria-label="Live Website"
              >
                <LuExternalLink size={compact ? 18 : 20} />
              </a>
            )}
          </div>
        </div>

        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300`}>
          {project.title}
        </h3>

        <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-[#13111F]/80 border border-violet-950/40 text-violet-300/80 group-hover:border-violet-500/10 transition-colors duration-300 select-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-[#090D16] text-zinc-400 py-20 sm:py-28 px-4 border-t border-violet-950/20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-100 h-100 bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Featured Projects<span className="text-violet-500">.</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl leading-relaxed">
            Real-world projects I've built, ranging from full-stack web apps to custom AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} compact={false} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
            Mini Projects<span className="text-violet-500">.</span>
          </h3>
          <p className="text-sm text-zinc-500 max-w-xl leading-relaxed mb-8">
            Smaller client builds and custom frontend websites.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {miniProjects.map((project, index) => (
              <ProjectCard key={index} project={project} compact={true} />
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0E1117] border border-violet-900/40 rounded-2xl overflow-hidden shadow-2xl shadow-violet-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-violet-950/40">
              <span className="text-xs font-mono font-medium text-violet-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                System Demo Playback
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                aria-label="Close modal"
              >
                <LuX size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects