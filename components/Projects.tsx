import React from 'react'
import { LuGithub, LuExternalLink, LuFolder } from 'react-icons/lu'

const Projects = () => {
  const projects = [
    {
      title: "SaaS E-Commerce Dashboard",
      description: "A high-performance full-stack management panel featuring complex CRUD operations, relational database indexing, and live analytics charting for digital storefronts.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Autonomous WhatsApp AI Agent",
      description: "An intelligent headless agent built leveraging containerized microservices and automated n8n pipelines to interpret, process, and reply to user inquiries natively.",
      tags: ["n8n Automation", "Evolution API", "Python", "Docker"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Commercial Booking Engine",
      description: "A fully production-grade booking platform optimized for rapid content delivery networks, fluid filtering systems, and high-conversion client reservations.",
      tags: ["Next.js", "React", "Node.js", "UI/UX Design"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

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
            <div 
              key={index}
              className="bg-black/20 border border-violet-950/40 p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:border-violet-500/30 hover:bg-black/40 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                    <LuFolder size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center space-x-3 text-zinc-500">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-400 transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <LuGithub size={20} />
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-400 transition-colors duration-200"
                      aria-label="Live Website"
                    >
                      <LuExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
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
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects