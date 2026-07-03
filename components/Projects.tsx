import React from 'react'
import { LuGithub, LuExternalLink, LuFolder } from 'react-icons/lu'

type Project = {
  title: string
  description: string
  tags: string[]
  githubLink: string | null
  liveLink: string | null
  inProgress?: boolean
  client?: boolean
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Analytics Dashboard",
      description: "A high-performance full-stack management panel featuring complex CRUD operations, relational database indexing, and live analytics charting for digital storefronts.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query", "NextAuth", "Recharts"],
      githubLink: "https://github.com/kaze1-dev/Analytics_Dashboard",
      liveLink: "https://analytics-dashboard-nu-mocha.vercel.app/",
      inProgress: true
    },
    {
      title: "Autonomous WhatsApp AI Agent",
      description: "A client-deployed intelligent headless agent leveraging containerized microservices and automated n8n pipelines to interpret, process, and reply to user inquiries natively.",
      tags: ["n8n", "Evolution API", "Docker", "Docker Compose"],
      githubLink: null,
      liveLink: null,
      client: true
    },
    {
      title: "GoRoom — Multi-Hotel Booking Platform",
      description: "A production-grade booking platform built for a client managing 8 hotels on a single unified system, featuring fluid filtering, secure authentication, and high-conversion reservations.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "better-auth", "Tailwind CSS"],
      githubLink: null,
      liveLink: "https://goroom-system.vercel.app/",
      inProgress: true,
      client: true
    }
  ];

  const miniProjects: Project[] = [
    {
      title: "Pixel Cat Agent",
      description: "A chatty AI-powered mascot widget embedded on this portfolio, backed by a retrieval-augmented generation pipeline.",
      tags: ["Python", "FastAPI", "LangChain", "RAG"],
      githubLink: null,
      liveLink: null
    },
    {
      title: "Hotel Haven Lahore",
      description: "A client-facing frontend site built for a Lahore-based hotel.",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: null,
      liveLink: "https://haven-hotel-lahore.vercel.app/", 
      client: true
    },
    {
      title: "Go Guest House Lahore",
      description: "A client-facing frontend site built for a Lahore-based guest house.",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: null,
      liveLink: "https://guest-house-roan.vercel.app/", 
      client: true
    }
  ];

  const ProjectCard = ({ project, compact }: { project: Project; compact: boolean }) => (
    <div
      className={`bg-black/20 border border-violet-950/40 ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-7'} rounded-2xl transition-all duration-300 hover:border-violet-500/30 hover:bg-black/40 group flex flex-col justify-between hover:-translate-y-1 relative`}
    >
      {project.inProgress && (
        <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 select-none">
          In Progress
        </span>
      )}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
            <LuFolder size={compact ? 24 : 28} strokeWidth={1.5} />
          </div>
          {!project.inProgress && (
            <div className="flex items-center space-x-3 text-zinc-500">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors duration-200"
                  aria-label="GitHub Repository"
                >
                  <LuGithub size={compact ? 18 : 20} />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors duration-200"
                  aria-label="Live Website"
                >
                  <LuExternalLink size={compact ? 18 : 20} />
                </a>
              )}
            </div>
          )}
          {project.inProgress && project.liveLink && (
            <div className="flex items-center space-x-3 text-zinc-500 mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition-colors duration-200"
                aria-label="Live Website"
              >
                <LuExternalLink size={compact ? 18 : 20} />
              </a>
            </div>
          )}
        </div>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300`}>
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
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
    <section id="projects" className="bg-[#0E1117] text-zinc-400 py-20 sm:py-28 px-4 border-t border-violet-950/20 relative overflow-hidden">

      <div className="absolute top-1/4 left-0 w-100 h-100 bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Featured Projects<span className="text-violet-500">.</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl leading-relaxed">
            A small collection of real-world deployments and architectural builds bridging frontend depth with intelligent automated backends.
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
            Smaller builds and client sites that didn't need a whole section of their own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {miniProjects.map((project, index) => (
              <ProjectCard key={index} project={project} compact={true} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects