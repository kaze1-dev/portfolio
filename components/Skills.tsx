import React from 'react';

const TechStack = () => {
  const stacks = [
    {
      category: 'Frontend',
      description: '',
      skills: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'TanStack Query',
        'shadcn/ui',
        'Framer Motion',
      ],
    },
    {
      category: 'Backend & Databases',
      description: '',
      skills: [
        'Python',
        'FastAPI',
        'Node.js',
        'PostgreSQL',
        'Prisma ORM',
        'REST APIs',
        'Docker',
        'Docker Compose',
      ],
    },
    {
      category: 'AI Engineering',
      description: '',
      skills: [
        'Python',
        'LangChain',
        'LangGraph',
        'RAG',
        'LLM Integration',
        'AI Agents',
        'Vector Databases',
        'Local LLMs',
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="relative overflow-hidden border-zinc-800 bg-zinc-950 px-4 py-20 text-zinc-400 sm:py-28"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-75 w-75 rounded-full bg-white/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack<span className="text-zinc-300">.</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-zinc-500">
            Tools, frameworks, and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl bg-black/20 p-6 transition-all hover:bg-black/40 sm:p-8"
            >
              <div className="absolute left-0 top-0 h-px w-full rounded-t-2xl bg-linear-to-r from-transparent transition-all duration-500" />

              <div>
                <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-zinc-200">
                  {stack.category}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                  {stack.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="select-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 group-hover:border-zinc-700 group-hover:text-white"
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
  );
};

export default TechStack;