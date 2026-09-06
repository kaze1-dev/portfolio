import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LuArrowLeft } from "react-icons/lu";

export const metadata = {
  title: "ScoutAI Case Study | Faisal Abbas",
  description:
    "An agentic web research system built with LangGraph, MCP, FastAPI, Next.js, OpenRouter, and Server-Sent Events.",
};

const architectureStages = [
  {
    number: "01",
    title: "Router",
    description:
      "Classifies the incoming request and determines whether external research is necessary. Casual requests bypass the research pipeline entirely.",
  },
  {
    number: "02",
    title: "Planner",
    description:
      "Decomposes a research question into focused tasks using structured output backed by a Pydantic schema.",
  },
  {
    number: "03",
    title: "Researcher",
    description:
      "Executes each planned task and retrieves external information through the MCP tool layer while emitting execution progress.",
  },
  {
    number: "04",
    title: "MCP",
    description:
      "Provides a protocol boundary between the agent and external capabilities. The current implementation exposes a Tavily-powered web search tool.",
  },
  {
    number: "05",
    title: "Synthesizer",
    description:
      "Receives the collected research and produces the final response using the gathered evidence as its primary context.",
  },
];

const engineeringDecisions = [
  {
    number: "01",
    title: "Conditional Agent Execution",
    description:
      "The system does not send every message through the research pipeline. A dedicated LLM-based Router determines whether external research is actually required.",
  },
  {
    number: "02",
    title: "Separation of Responsibilities",
    description:
      "Routing, planning, research execution, and synthesis are implemented as separate LangGraph nodes instead of being combined into a single monolithic agent call.",
  },
  {
    number: "03",
    title: "Structured Research Plans",
    description:
      "The Planner produces a typed research plan using Pydantic structured output. This gives the Researcher a predictable interface rather than relying on arbitrary model-generated text.",
  },
  {
    number: "04",
    title: "MCP as a Tool Boundary",
    description:
      "Web search is isolated behind an MCP client and server. The core research workflow therefore does not depend directly on the implementation details of the search provider.",
  },
  {
    number: "05",
    title: "Dedicated Synthesis",
    description:
      "Research collection and answer generation are separate stages. The Researcher gathers evidence while the Synthesizer is responsible for turning that evidence into the final response.",
  },
  {
    number: "06",
    title: "Unified Streaming Contract",
    description:
      "Both casual and research paths ultimately emit the same final_answer SSE event, allowing the frontend to maintain a single response pipeline.",
  },
];

const improvements = [
  {
    before: "Every message entered the research workflow.",
    after: "A Router now decides whether research is necessary before the research pipeline begins.",
  },
  {
    before: "The workflow was primarily linear.",
    after: "LangGraph conditionally branches between casual conversation and research execution.",
  },
  {
    before: "Planning, execution, and synthesis were more tightly coupled.",
    after: "Each responsibility is isolated into a dedicated graph node with shared typed state.",
  },
  {
    before: "The user had little visibility during long-running research.",
    after: "Custom LangGraph events are translated into SSE events and streamed to the frontend in real time.",
  },
];

const techStack = [
  ["Python", "Core agent and backend development"],
  ["LangGraph", "Agent orchestration, state, and conditional routing"],
  ["LangChain", "LLM integration and MCP adapter integration"],
  ["MCP", "External tool integration boundary"],
  ["FastAPI", "Backend API and SSE endpoint"],
  ["Next.js", "Research interface and streaming UI"],
  ["TypeScript", "Type-safe frontend development"],
  ["OpenRouter", "LLM provider through an OpenAI-compatible API"],
  ["Tavily", "Web search capability"],
  ["SSE", "Real-time execution event streaming"],
];

const responsibilities = [
  "LangGraph workflow design",
  "Typed agent state",
  "LLM-based intent routing",
  "Structured research planning",
  "MCP client/server integration",
  "Tavily web search integration",
  "Research synthesis",
  "FastAPI API design",
  "SSE event streaming",
  "Next.js streaming interface",
];

export default function ScoutAICaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-400 sm:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <LuArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        {/* Hero */}
        <header className="border-b border-zinc-800 pb-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-400">
              AI Engineering / Agent Systems
            </span>

            <span className="rounded-md border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-500">
              v1 · Work in Progress
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ScoutAI — Agentic Web Research System
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
            A modular research system that determines when external research
            is needed, plans focused research tasks, executes web searches
            through MCP, synthesizes the collected findings, and streams
            execution progress to the frontend in real time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/kaze1-dev/research-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              <BsGithub size={16} />
              View on GitHub
            </a>
          </div>
        </header>

        {/* Overview */}
        <section className="border-b border-zinc-800 py-10">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-4">
            {[
              ["Orchestration", "LangGraph"],
              ["Tool Layer", "MCP + Tavily"],
              ["Backend", "FastAPI"],
              ["Streaming", "SSE"],
            ].map(([label, value]) => (
              <div key={label} className="bg-zinc-950 p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Problem & Approach</SectionHeading>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionLabel>The problem</SectionLabel>

              <p className="text-sm leading-7 text-zinc-400">
                A basic research assistant can be implemented as a simple
                sequence: send a question to an LLM, call a search tool, and
                generate an answer.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                That approach becomes harder to maintain as the system grows.
                Not every message requires research, complex questions need
                decomposition, tool execution should be separated from
                synthesis, and long-running workflows need a way to communicate
                progress to the user.
              </p>
            </div>

            <div>
              <SectionLabel>The approach</SectionLabel>

              <p className="text-sm leading-7 text-zinc-400">
                ScoutAI treats research as an explicit workflow rather than a
                single LLM operation. A Router first determines the required
                execution path. Research requests then move through planning,
                research execution, and synthesis.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                External capabilities are isolated through MCP, while FastAPI
                exposes the workflow as an SSE stream that the Next.js client
                consumes incrementally.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>System Architecture</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The core workflow is implemented as a conditional LangGraph
            pipeline. The Router provides the decision layer, while the
            research path is divided into planning, execution, and synthesis.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="min-w-[680px] font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
{`                         [ User Query ]
                              │
                              ▼
                       ┌─────────────┐
                       │    Router   │
                       └──────┬──────┘
                              │
               ┌──────────────┴──────────────┐
               │                             │
        needs_research = false       needs_research = true
               │                             │
               ▼                             ▼
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
                     [ Next.js UI ]`}
            </pre>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Agentic Workflow</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Each stage has a defined responsibility and communicates through
            shared LangGraph state. This keeps the workflow composable and
            makes individual stages easier to modify independently.
          </p>

          <div className="mt-8 space-y-3">
            {architectureStages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-xl border border-zinc-800 bg-black/20 p-5 sm:p-6"
              >
                <div className="flex gap-5">
                  <span className="pt-0.5 font-mono text-xs text-zinc-600">
                    {stage.number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intent Routing */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Intent-Aware Routing</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The Router introduces an explicit decision layer before research
            execution. It uses the LLM to determine whether the request needs
            external information rather than relying on a hardcoded list of
            phrases.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FlowCard
              title="Casual request"
              flow="User → Router → Casual → Final Answer"
              description="Simple conversation bypasses the research pipeline and is handled directly by the configured LLM."
            />

            <FlowCard
              title="Research request"
              flow="User → Router → Planner → Researcher → Synthesizer"
              description="Requests requiring external or current information enter the full research workflow."
            />
          </div>

          <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              LangGraph State
            </p>

            <pre className="overflow-x-auto font-mono text-xs leading-6 text-zinc-400 sm:text-sm">
{`class ResearchState(TypedDict):
    query: str
    needs_research: bool
    plan: list[str]
    research: list[str]
    answer: str`}
            </pre>
          </div>
        </section>

        {/* Planning */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Structured Planning</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Broad questions are converted into focused research tasks before
            any web search is performed. The Planner uses structured output
            backed by Pydantic so the Researcher receives a predictable data
            structure.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-black/20 p-6">
              <SectionLabel>Example</SectionLabel>

              <p className="text-sm leading-6 text-zinc-300">
                Compare Python and TypeScript for building AI-powered web
                applications.
              </p>

              <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <pre className="font-mono text-xs leading-6 text-zinc-500">
{`ResearchPlan
├── AI/ML libraries
├── Ecosystem maturity
├── Performance
├── Web development
└── Developer experience`}
                </pre>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-black/20 p-6">
              <SectionLabel>Contract</SectionLabel>

              <pre className="font-mono text-xs leading-6 text-zinc-400">
{`class ResearchPlan(BaseModel):
    tasks: list[str]`}
              </pre>

              <p className="mt-5 text-sm leading-6 text-zinc-500">
                The structured result is stored in graph state and becomes the
                input contract for the Researcher.
              </p>
            </div>
          </div>
        </section>

        {/* MCP */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>MCP Tool Architecture</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Web search is deliberately separated from the core agent through
            the Model Context Protocol. The Researcher interacts with an MCP
            client rather than directly depending on the search provider.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="min-w-[620px] font-mono text-xs leading-7 text-zinc-400 sm:text-sm">
{`Researcher
    │
    ▼
MCP Client
    │
    ▼
MCP Server
    │
    ▼
search()
    │
    ▼
Tavily
    │
    ▼
Research Result`}
            </pre>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
            This creates a clean capability boundary. Additional tools can be
            exposed through MCP without embedding their implementation directly
            into the LangGraph research workflow.
          </p>
        </section>

        {/* Synthesis */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Evidence & Synthesis</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Research execution and final answer generation are intentionally
            separate. The Researcher collects information while the
            Synthesizer receives the accumulated findings and produces the
            final response.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-black/20 p-6">
            <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-6">
              <p className="min-w-max text-center font-mono text-xs text-zinc-400 sm:text-sm">
                Research Tasks → Evidence Collection → Synthesis → Final Answer
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Keeping these responsibilities separate makes the system easier
              to reason about and gives the final generation stage a clear body
              of research context instead of mixing search execution with
              response generation.
            </p>
          </div>
        </section>

        {/* Streaming */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Real-Time Agent Streaming</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Research can involve multiple model calls and external searches.
            Instead of keeping the interface in a generic loading state,
            ScoutAI streams execution events from LangGraph through FastAPI
            using Server-Sent Events.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="min-w-[650px] font-mono text-xs leading-7 text-zinc-400 sm:text-sm">
{`LangGraph
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
       Browser ReadableStream
                  │
                  ▼
          Next.js UI`}
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              [
                "planning / plan",
                "Communicates the beginning and result of the research planning stage.",
              ],
              [
                "task_started / task_completed",
                "Exposes research execution progress as individual tasks run.",
              ],
              [
                "final_answer",
                "Delivers the completed response through the same interface for both execution paths.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-zinc-800 bg-black/20 p-5"
              >
                <p className="font-mono text-xs text-zinc-300">{title}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Event boundary */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Streaming Contract</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Internal LangGraph execution events are translated into a smaller,
            frontend-oriented SSE event model. This keeps the UI independent
            from the internal graph implementation.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "planning",
              "plan",
              "task_started",
              "task_completed",
              "synthesis_started",
              "final_answer",
            ].map((event) => (
              <div
                key={event}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3"
              >
                <code className="font-mono text-xs text-zinc-400">
                  {event}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-black/20 p-6">
            <p className="font-mono text-xs leading-7 text-zinc-500">
              Internal Agent Execution
              <br />
              ↓
              <br />
              Event Translation
              <br />
              ↓
              <br />
              FastAPI SSE Endpoint
              <br />
              ↓
              <br />
              Browser ReadableStream
              <br />
              ↓
              <br />
              React State
            </p>
          </div>
        </section>

        {/* Architecture evolution */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Architecture Evolution</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            ScoutAI started as a simpler linear research workflow. As the
            system evolved, explicit routing, stronger boundaries between
            responsibilities, and real-time execution visibility were
            introduced.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
            {improvements.map((item, index) => (
              <div
                key={item.before}
                className="grid gap-5 border-b border-zinc-800 p-5 last:border-b-0 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:p-6"
              >
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    Before
                  </p>
                  <p className="text-sm leading-6 text-zinc-500">
                    {item.before}
                  </p>
                </div>

                <div className="hidden font-mono text-zinc-700 sm:block">
                  →
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    Now
                  </p>
                  <p className="text-sm leading-6 text-zinc-300">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering decisions */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Key Engineering Decisions</SectionHeading>

          <div className="grid gap-4 md:grid-cols-2">
            {engineeringDecisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-xl border border-zinc-800 bg-black/20 p-6"
              >
                <span className="font-mono text-xs text-zinc-600">
                  {decision.number}
                </span>

                <h3 className="mt-4 font-semibold text-white">
                  {decision.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Technology</SectionHeading>

          <div className="overflow-hidden rounded-xl border border-zinc-800">
            {techStack.map(([technology, role]) => (
              <div
                key={technology}
                className="grid gap-2 border-b border-zinc-800 bg-black/20 p-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:px-5"
              >
                <span className="font-mono text-sm font-semibold text-white">
                  {technology}
                </span>

                <span className="text-sm leading-6 text-zinc-500">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* My role */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>My Role</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            I designed and implemented the system architecture, agent workflow,
            backend API, MCP integration, and frontend streaming experience.
            The project was built as an exploration of how these components
            work together as a complete AI system.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <div
                key={item}
                className="border-b border-zinc-900 py-2.5 font-mono text-xs text-zinc-400"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Limitations */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Current Limitations</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            This is a v1 architecture and is intentionally focused on the core
            agent workflow rather than production-scale research infrastructure.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "The current MCP server exposes a single web-search capability.",
              "Research tasks are executed sequentially rather than through parallel research workers.",
              "The system does not yet maintain persistent research memory across sessions.",
              "Source citation and evidence verification can be expanded further.",
              "The current architecture is primarily an exploration of orchestration and streaming rather than a fully production-hardened research platform.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-zinc-800 bg-black/20 px-5 py-4 text-sm leading-6 text-zinc-500"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Future direction */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Future Direction</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The current architecture provides a foundation for expanding the
            system without replacing its core workflow model.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Parallel research execution",
              "Multiple MCP tools",
              "Source and citation tracking",
              "Research memory",
              "Query refinement",
              "Research validation",
              "Persistent sessions",
              "More advanced agent routing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 font-mono text-xs text-zinc-400"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Takeaway */}
        <section className="py-14">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            <SectionLabel>Engineering takeaway</SectionLabel>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
              The interesting part is the system around the model.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Building ScoutAI reinforced that an AI application is not just
              about prompting an LLM. Once the workflow involves planning,
              external tools, shared state, multiple execution stages, and
              long-running operations, architecture becomes part of the AI
              engineering problem.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
              ScoutAI is an ongoing exploration of how modular agent systems
              can be designed so that individual capabilities can evolve
              without requiring the entire application to be rewritten.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-5 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-white"
          >
            <LuArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Return to all projects
          </Link>

          <a
            href="https://github.com/kaze1-dev/research-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-white"
          >
            View repository
            <BsGithub size={14} />
          </a>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-2xl font-bold tracking-tight text-white">
      {children}
      <span className="text-zinc-600">.</span>
    </h2>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
      {children}
    </p>
  );
}

function FlowCard({
  title,
  flow,
  description,
}: {
  title: string;
  flow: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-black/20 p-6">
      <SectionLabel>{title}</SectionLabel>

      <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-4">
        <code className="whitespace-nowrap font-mono text-xs text-zinc-400">
          {flow}
        </code>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-500">{description}</p>
    </div>
  );
}