import React from 'react'

const TechStack = () => {
 const stacks = [
  {
    category: "Frontend",
    description: "",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & Databases",
    description: "",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    category: "AI Engineering",
    description: "",
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "LLM Integration",
      "AI Agents",
      "Vector Databases",
      "Local LLMs"
    ],
  },
];

  return (
    <section id="tech" className="bg-[#090D16] text-zinc-400 py-20 sm:py-28 px-4 border-t border-violet-950/20 relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-75 h-75 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Tech Stack<span className="text-violet-500">.</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl leading-relaxed">
            Tools, frameworks, and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="bg-black/20 p-6 sm:p-8 rounded-2xl transition-all group relative flex flex-col justify-between hover:bg-black/40"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent transition-all duration-500 rounded-t-2xl" />

              <div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {stack.category}
                </h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
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