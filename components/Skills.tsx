import React from 'react'

const TechStack = () => {
  const stacks = [
    {
      category: "Frontend Architecture",
      description: "Building fast, responsive, and visually striking user interfaces with fluid interaction models.",
      skills: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP", "shadcn/ui"]
    },
    {
      category: "Backend & Databases",
      description: "Designing robust server-side application logic, secure APIs, and optimized database schemas.",
      skills: ["Python", "Node.js", "PostgreSQL", "Prisma ORM", "FastAPI", "Docker", "Docker Compose"]
    },
    {
      category: "AI & Automation",
      description: "Deploying intelligent autonomous workflows, containerized environments, and custom agent integrations.",
      skills: ["n8n Automation", "LangChain", "RAG (pgvector)", "Ollama", "LLM Integration", "Evolution API", "Docker", "Docker Compose"]
    }
  ];

  return (
    <section id="tech" className="bg-[#0E1117] text-zinc-400 py-20 sm:py-28 px-4 border-t border-violet-950/20 relative overflow-hidden">
      
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Tech Stack Blueprint<span className="text-violet-500">.</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl leading-relaxed">
            A curated selection of languages, frameworks, and automated engines I use to engineer high-performance systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((stack, idx) => (
            <div 
              key={idx}
              className="bg-black/20 border border-violet-950/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-violet-500/30 hover:bg-black/40 group relative flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-500/40 transition-all duration-500 rounded-t-2xl" />

              <div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {stack.category}
                </h3>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                  {stack.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#13111F]/60 border border-violet-950/30 text-violet-300/90 group-hover:border-violet-500/20 group-hover:text-violet-200 transition-all duration-300 select-none"
                  >
                    {skill}
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

export default TechStack;