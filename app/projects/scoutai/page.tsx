import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  LuArrowLeft,
  LuBrainCircuit,
  LuGitBranch,
  LuGlobe,
  LuLayers3,
  LuListTree,
  LuMessageCircle,
  LuNetwork,
  LuRadio,
  LuSearch,
  LuServer,
  LuSparkles,
  LuWorkflow,
} from "react-icons/lu";

export const metadata = {
  title: "ScoutAI Case Study | Faisal Abbas",
  description:
    "An autonomous web research agent built with LangGraph, MCP, FastAPI, Next.js, OpenRouter, and SSE.",
};

const techStack = [
  {
    name: "Python",
    role: "Core agent and backend development",
  },
  {
    name: "LangGraph",
    role: "Agent orchestration and workflow state",
  },
  {
    name: "LangChain",
    role: "LLM integration and agent tooling",
  },
  {
    name: "MCP",
    role: "Modular external tool integration",
  },
  {
    name: "FastAPI",
    role: "Backend API and SSE endpoint",
  },
  {
    name: "Next.js",
    role: "Research interface and streaming UI",
  },
  {
    name: "TypeScript",
    role: "Type-safe frontend development",
  },
  {
    name: "OpenRouter",
    role: "LLM provider",
  },
  {
    name: "Tavily",
    role: "Web search capability",
  },
  {
    name: "Server-Sent Events",
    role: "Real-time agent execution streaming",
  },
];

const architectureStages = [
  {
    title: "Router",
    description:
      "Classifies the user's request and decides whether external research is actually necessary.",
    icon: LuGitBranch,
  },
  {
    title: "Planner",
    description:
      "Decomposes research questions into focused, executable research tasks using structured output.",
    icon: LuListTree,
  },
  {
    title: "Researcher",
    description:
      "Executes each research task and retrieves external information through MCP tools.",
    icon: LuSearch,
  },
  {
    title: "MCP",
    description:
      "Provides a modular boundary between the agent and external capabilities such as web search.",
    icon: LuNetwork,
  },
  {
    title: "Synthesizer",
    description:
      "Combines the collected research into a coherent final response grounded in the available evidence.",
    icon: LuSparkles,
  },
];

const engineeringDecisions = [
  {
    title: "Conditional Agent Execution",
    description:
      "The agent does not blindly execute the research pipeline for every message. A dedicated routing layer decides whether research is required first.",
  },
  {
    title: "Separation of Responsibilities",
    description:
      "Routing, planning, research execution, and synthesis are isolated into separate LangGraph nodes instead of relying on one monolithic agent call.",
  },
  {
    title: "MCP as a Tool Boundary",
    description:
      "Web search is exposed through an MCP server rather than being tightly coupled to the researcher. This creates a cleaner path for adding future tools.",
  },
  {
    title: "Structured Research Plans",
    description:
      "The Planner uses a Pydantic schema to produce a predictable list of research tasks that can be consumed by the Researcher.",
  },
  {
    title: "Unified Streaming Contract",
    description:
      "Both casual and research conversations eventually emit the same final_answer SSE event, keeping the frontend response pipeline simple.",
  },
  {
    title: "Execution Visibility",
    description:
      "Custom LangGraph events are converted into SSE events so the frontend can show what the agent is doing while the workflow is running.",
  },
];

const improvements = [
  {
    before: "Every query entered the research workflow.",
    after: "A Router now decides whether research is necessary.",
  },
  {
    before: "The workflow was primarily linear.",
    after: "LangGraph now conditionally branches between casual and research execution.",
  },
  {
    before: "Responsibilities were more tightly coupled.",
    after: "Routing, planning, research, and synthesis are independent stages.",
  },
  {
    before: "The user had limited visibility during execution.",
    after: "Research progress is streamed to the frontend in real time.",
  },
];

export default function ScoutAICaseStudy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-12 text-zinc-400 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-mono text-zinc-500 transition-colors hover:text-white"
        >
          <LuArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-12 border-b border-zinc-800 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-xs font-mono font-semibold text-zinc-300">
              AI Engineering • Agent Systems
            </span>

            <span className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Work in Progress
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            ScoutAI — Autonomous Web Research Agent
            <span className="text-zinc-300">.</span>
          </h1>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            An agentic research system that decides when research is needed,
            breaks complex questions into focused tasks, researches through
            MCP tools, synthesizes the findings, and streams its execution to
            the user in real time.
          </p>

          <a
            href="https://github.com/kaze1-dev/research-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            {/* <LuGitBranch size={16} /> */}
            <BsGithub />
            View on GitHub
          </a>
        </div>

        {/* Overview */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {
              label: "Orchestration",
              val: "LangGraph",
              icon: LuWorkflow,
            },
            {
              label: "Tools",
              val: "MCP + Tavily",
              icon: LuNetwork,
            },
            {
              label: "Backend",
              val: "FastAPI",
              icon: LuServer,
            },
            {
              label: "Streaming",
              val: "SSE",
              icon: LuRadio,
            },
          ].map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-black/30 p-4"
              >
                <Icon size={18} className="mb-4 text-zinc-500" />

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white sm:text-base">
                    {item.val}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Problem */}
        {/* <section className="mb-14 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            The Problem & Solution<span className="text-zinc-300">.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-zinc-200">
                The Problem
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                A basic research assistant can be built with a simple sequence:
                send the question to an LLM, call a search tool, and generate
                an answer. But that approach quickly becomes difficult to extend
                as the workflow becomes more sophisticated.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Every message does not require web research, complex questions
                need decomposition, tool execution needs to be separated from
                synthesis, and users should not have to stare at a loading
                indicator while an agent works.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">
                The Approach
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                I redesigned the system as a conditional LangGraph workflow.
                A Router first decides whether research is required. Research
                queries are then planned, executed through MCP tools, and
                synthesized separately.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                The entire execution is streamed through FastAPI and SSE,
                allowing the Next.js frontend to show research progress before
                the final answer is ready.
              </p>
            </div>
          </div>
        </section> */}

        {/* Architecture */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            System Architecture<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            ScoutAI uses a conditional agentic pipeline. The Router acts as the
            decision layer, while the research path is divided into planning,
            execution, and synthesis.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
            <pre>{`                         [ User Query ]
                               │
                               ▼
                        ┌─────────────┐
                        │    Router   │
                        └──────┬──────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
          needs_research = false      needs_research = true
                 │                           │
                 ▼                           ▼
          ┌─────────────┐              ┌─────────────┐
          │    Casual   │              │   Planner   │
          └──────┬──────┘              └──────┬──────┘
                 │                            │
                 │                            ▼
                 │                     ┌─────────────┐
                 │                     │  Researcher │
                 │                     └──────┬──────┘
                 │                            │
                 │                            ▼
                 │                     ┌─────────────┐
                 │                     │  MCP Client │
                 │                     └──────┬──────┘
                 │                            │
                 │                            ▼
                 │                     ┌─────────────┐
                 │                     │  MCP Server │
                 │                     └──────┬──────┘
                 │                            │
                 │                            ▼
                 │                     ┌─────────────┐
                 │                     │ Tavily Search│
                 │                     └──────┬──────┘
                 │                            │
                 │                            ▼
                 │                     ┌─────────────┐
                 │                     │ Synthesizer │
                 │                     └──────┬──────┘
                 │                            │
                 └────────────┬───────────────┘
                              ▼
                       [ Final Answer ]
                              │
                              ▼
                         [ SSE Stream ]
                              │
                              ▼
                       [ Next.js UI ]`}</pre>
          </div>
        </section>

        {/* Agent workflow */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Agentic Workflow<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            Instead of relying on one large LLM call, ScoutAI divides the
            workflow into independent stages. Each stage has a clearly defined
            responsibility and communicates through shared LangGraph state.
          </p>

          <div className="space-y-3">
            {architectureStages.map((stage, idx) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.title}
                  className="group rounded-2xl border border-zinc-800 bg-black/20 p-5 transition-colors hover:border-zinc-700 hover:bg-black/30 sm:p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-600">
                          0{idx + 1}
                        </span>

                        <h3 className="font-bold text-white">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-relaxed text-zinc-400">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Router */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Intent-Aware Routing<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            One of the main architectural changes was introducing a dedicated
            Router before the research pipeline. The system first determines
            whether the user's request actually needs external information.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* <LuMessageCircle size={20} className="text-zinc-400" /> */}
                <h3 className="font-semibold text-white">
                  Casual Conversation
                </h3>
              </div>

              <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-xs text-zinc-400">
                User → Router → Casual → Final Answer
              </div>

              <p className="text-sm leading-relaxed text-zinc-500">
                Greetings, simple conversation, jokes, and similar requests
                bypass the research pipeline entirely.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* <LuBrainCircuit size={20} className="text-zinc-400" /> */}
                <h3 className="font-semibold text-white">
                  Research Request
                </h3>
              </div>

              <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-xs text-zinc-400">
                User → Router → Planner → Researcher → Synthesizer
              </div>

              <p className="text-sm leading-relaxed text-zinc-500">
                Questions requiring current or external information enter the
                full research workflow.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
            <pre>{`ResearchState

{
    query: string
    needs_research: boolean
    plan: string[]
    research: string[]
    answer: string
}`}</pre>
          </div>
        </section>

        {/* Planning + research */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Planning & Research Execution
            <span className="text-zinc-300">.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <div className="mb-4 flex items-center gap-3">
                <LuListTree size={19} className="text-zinc-400" />

                <h3 className="font-semibold text-white">
                  Structured Planning
                </h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                The Planner converts a broad question into a list of focused
                research tasks. The output follows a Pydantic schema, giving
                the next stage a predictable structure.
              </p>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-xs leading-relaxed text-zinc-400">
                <pre>{`ResearchPlan
    └── tasks
        ├── Task 1
        ├── Task 2
        ├── Task 3
        └── Task 4`}</pre>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <div className="mb-4 flex items-center gap-3">
                <LuSearch size={19} className="text-zinc-400" />

                <h3 className="font-semibold text-white">
                  Research Execution
                </h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                The Researcher takes each task and executes it through the
                available MCP search tool. Research results are collected in
                the shared graph state and passed to the Synthesizer.
              </p>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-xs leading-relaxed text-zinc-400">
                <pre>{`Task
  ↓
MCP Client
  ↓
MCP Server
  ↓
Tavily
  ↓
Research Result`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* MCP */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            MCP Tool Architecture<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            Web search is intentionally separated from the core agent through
            the Model Context Protocol. The Researcher communicates with an MCP
            client, which connects to a dedicated MCP server exposing the
            search capability.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
            <div className="grid items-center gap-3 text-center text-xs font-mono sm:grid-cols-5">
              {[
                ["Researcher", LuBrainCircuit],
                ["MCP Client", LuNetwork],
                ["MCP Server", LuServer],
                ["search()", LuSearch],
                ["Tavily", LuGlobe],
              ].map(([label, Icon], idx) => {
                const Component = Icon as React.ElementType;

                return (
                  <div key={String(label)} className="contents">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                      <Component
                        size={18}
                        className="mx-auto mb-2 text-zinc-500"
                      />
                      <span className="text-zinc-300">{String(label)}</span>
                    </div>

                    {idx < 4 && (
                      <span className="hidden text-zinc-700 sm:block">→</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zinc-500">
            This boundary means the core agent does not need to know how the
            search capability is implemented. Additional MCP tools can be
            introduced without restructuring the entire LangGraph workflow.
          </p>
        </section>

        {/* Synthesis */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Evidence → Synthesis<span className="text-zinc-300">.</span>
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
            <div className="mb-6 flex items-center gap-3">
              <LuLayers3 size={20} className="text-zinc-400" />

              <h3 className="font-semibold text-white">
                Why synthesis is separate
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              The Researcher is responsible for collecting information, not
              writing the final response. Once the planned tasks have been
              completed, their findings are passed to a dedicated Synthesizer.
            </p>

            <div className="my-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-center font-mono text-xs text-zinc-400 sm:text-sm">
              Research Tasks → Evidence Collection → Synthesis → Final Answer
            </div>

            <p className="text-sm leading-relaxed text-zinc-500">
              Keeping synthesis separate makes the workflow easier to reason
              about and gives the final generation stage a clear source of
              context rather than mixing search execution with answer
              generation.
            </p>
          </div>
        </section>

        {/* Streaming */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Real-Time Agent Streaming<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            A research workflow can take noticeably longer than a normal LLM
            response. Instead of waiting for the entire graph to finish,
            ScoutAI streams execution events from FastAPI to the Next.js
            frontend using Server-Sent Events.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
            <pre>{`LangGraph
    │
    ├── router
    ├── planner
    ├── researcher
    │     ├── task_started
    │     └── task_completed
    │
    └── synthesizer
          │
          └── final_answer
                  │
                  ▼
           FastAPI SSE
                  │
                  ▼
        EventSourceResponse
                  │
                  ▼
          Next.js Frontend`}</pre>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Task Started",
                desc: "The UI can show which research task is currently running.",
              },
              {
                title: "Task Completed",
                desc: "Completed research tasks can be reflected immediately in the interface.",
              },
              {
                title: "Final Answer",
                desc: "The synthesized response is delivered through the same streaming interface.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-black/20 p-5"
              >
                <h3 className="mb-2 text-sm font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture evolution */}
        {/* <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Architecture Evolution<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            ScoutAI started as a much simpler linear research workflow. As the
            system evolved, I introduced explicit decision-making and clearer
            boundaries between the different responsibilities.
          </p>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black/20">
            <div className="divide-y divide-zinc-800">
              {improvements.map((item, idx) => (
                <div
                  key={idx}
                  className="grid gap-5 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:p-6"
                >
                  <div>
                    <p className="mb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-600">
                      Before
                    </p>

                    <p className="text-sm leading-relaxed text-zinc-500">
                      {item.before}
                    </p>
                  </div>

                  <div className="hidden text-zinc-700 sm:block">→</div>

                  <div>
                    <p className="mb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Now
                    </p>

                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Engineering decisions */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Key Engineering Decisions
            <span className="text-zinc-300">.</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {engineeringDecisions.map((decision, idx) => (
              <div
                key={decision.title}
                className="rounded-2xl border border-zinc-800 bg-black/20 p-6"
              >
                <span className="mb-4 block text-xs font-mono text-zinc-600">
                  0{idx + 1}
                </span>

                <h3 className="mb-2 text-base font-bold text-white">
                  {decision.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-500">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Tech Stack<span className="text-zinc-300">.</span>
          </h2>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black/20">
            <div className="divide-y divide-zinc-800">
              {techStack.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
                >
                  <span className="font-mono text-sm font-bold text-white">
                    {item.name}
                  </span>

                  <span className="text-left text-sm text-zinc-500 sm:text-right">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            My Role<span className="text-zinc-300">.</span>
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
            <p className="mb-5 text-sm leading-relaxed text-zinc-400">
              I designed and implemented the system architecture, agent
              workflow, backend API, MCP integration, and frontend streaming
              experience.
            </p>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {[
                "LangGraph Workflow",
                "Agent State Design",
                "Intent Routing",
                "Research Planning",
                "MCP Integration",
                "Web Search Integration",
                "Research Synthesis",
                "FastAPI Backend",
                "SSE Streaming",
                "Next.js Frontend",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Takeaway */}
        {/* <section className="mb-14">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <LuSparkles size={20} className="text-zinc-300" />

              <h2 className="text-xl font-bold text-white">
                What I Learned
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              The main lesson from ScoutAI was that building an AI application
              is not only about prompting an LLM. Once the system becomes more
              capable, architecture becomes increasingly important. Routing,
              state management, tool boundaries, execution flow, error
              handling, and streaming all become part of the engineering
              problem.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
              ScoutAI is an ongoing exploration of how to build modular agent
              systems where individual capabilities can evolve without
              rewriting the entire application.
            </p>
          </div>
        </section> */}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-mono text-zinc-300 transition-colors hover:text-white"
          >
            <LuArrowLeft size={16} />
            Return to all projects
          </Link>

          <a
            href="https://github.com/kaze1-dev/research-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-zinc-500 transition-colors hover:text-white"
          >
            View repository
            <LuGitBranch size={15} />
          </a>
        </div>
      </div>
    </main>
  );
}