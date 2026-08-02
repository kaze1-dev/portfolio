import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { 
  LuArrowLeft, 
  LuCircle, 
  LuCpu, 
  LuShieldCheck, 
  LuZap, 
  LuGitBranch, 
  LuExternalLink, 
  LuServer, 
  LuLock, 
  LuLayers,
  LuPlay,
  LuBot,
  LuWrench
} from 'react-icons/lu';

export const metadata = {
  title: "WhatsApp AI Support Agent Case Study | Faisal Abbas",
  description: "Detailed engineering breakdown of an autonomous WhatsApp AI assistant integrated with WHMCS for hosting support.",
};

export default function WhatsAppAgentCaseStudy() {
  const techStack = [
    { name: "FastAPI", role: "Backend Framework" },
    { name: "LangChain & LangGraph", role: "LLM Orchestration & State" },
    { name: "WHMCS API", role: "Billing & Hosting CRM" },
    { name: "Evolution API", role: "WhatsApp Gateway" },
    { name: "Groq Cloud API", role: "Sub-Second LLM Inference" },
    { name: "Docker", role: "Containerization & Microservices" },
    { name: "PostgreSQL / Redis", role: "State Checkpoint Storage" },
  ];

  const toolsList = [
    "search_tricasol_knowledge_base", "check_registered_domains",
    "check_domain_availability", "update_nameserver",
    "get_domain_epp_code", "toggle_id_protection",
    "renew_domain", "get_client_products",
    "reset_hosting_password", "get_cpanel_sso_link",
    "check_unpaid_invoices", "get_client_invoices",
    "get_invoice_pdf", "open_support_ticket",
    "reply_to_ticket", "request_admin_approval"
  ];

  return (
    <main className="min-h-screen bg-[#090D16] text-zinc-400 py-12 sm:py-20 px-4 relative overflow-hidden">
      {/* Background Glow Effect */}
      {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" /> */}

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-violet-400 transition-colors mb-10 group"
        >
          <LuArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Header / Hero Section */}
        <div className="mb-12 border-b border-violet-950/40 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
              Client Project • Tricasol
            </span>
            {/* <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production Ready
            </span> */}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Autonomous WhatsApp AI Agent<span className="text-violet-500">.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            An enterprise-grade WhatsApp assistant integrated with WHMCS to automate web hosting customer support, domain management, invoice tracking, and technical ticketing in real-time.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/kaze1-dev/tricasol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-violet-950/60 hover:border-violet-500/40 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <BsGithub size={18} /> View Repository
            </a>
            {/* <a
              href="https://res.cloudinary.com/oriqovwt/video/upload/v1783369789/0706_1_x2ek1f.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-violet-950/50"
            >
              <LuPlay size={16} /> Watch Demo Video
            </a> */}
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Inference Speed", val: "Sub-Second", icon: "LuZap" },
            { label: "Integrated Tools", val: "20+ Automation Actions", icon: "LuWrench" },
            { label: "Security Guardrail", val: "Admin Approval", icon: "LuShieldCheck" },
            { label: "CRM Integration", val: "WHMCS Native API", icon: "LuServer" },
          ].map((item, idx) => (
            <div key={idx} className="bg-black/30 border border-violet-950/30 p-4 rounded-xl flex flex-col justify-between">
              {/* <item.icon size={20} className="text-violet-400 mb-2" /> */}
              <div>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{item.label}</p>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Problem vs Solution */}
        <section className="mb-14 space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Overview & The Challenge<span className="text-violet-500">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-3 flex items-center gap-2">
                The Friction Point
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Web hosting companies process high volumes of repetitive inquiries daily—such as checking unpaid invoices, domain availability, password resets, and ticket status checks. Manual ticketing causes support bottlenecks, delayed response times, and high staffing overhead.
              </p>
            </div>

            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                The AI Solution
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I designed an autonomous WhatsApp assistant directly connected to the company’s WHMCS client portal. Customers interact using conversational language on WhatsApp to safely query data, execute actions, and resolve technical tickets instantly.
              </p>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            System Architecture<span className="text-violet-500">.</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The system operates on an asynchronous service pattern. Incoming WhatsApp webhooks are processed in background tasks to preserve high HTTP performance and zero webhook drop rates.
          </p>

          <div className="bg-[#0E1117] border border-violet-950/40 rounded-2xl p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-violet-300">
  <pre>{`[ User WhatsApp ]
       │ (Message Webhook)
       ▼
[ Evolution API Gateway ]
       │ (Async POST Webhook)
       ▼
[ FastAPI Agent Backend ]
   ├── [ LangGraph Checkpointer ] ── (Redis / Postgres Session Memory)
   ├── [ Context Trimming Middleware ] ── (Token Window Management)
   ├── [ RAG Knowledge Engine ] ── (search_tricasol_knowledge_base)
   │
   ▼
[ Autonomous Tool Execution Engine ] (26 Integrated Tools)
   │
   ├──► [ Domain Operations ]
   │      ├── check_registered_domains
   │      ├── check_domain_availability
   │      ├── update_nameserver
   │      ├── get_domain_epp_code
   │      ├── toggle_id_protection
   │      └── renew_domain
   │
   ├──► [ Hosting & cPanel Ops ]
   │      ├── get_client_products
   │      ├── check_available_products
   │      ├── get_cpanel_sso_link
   │      ├── reset_hosting_password
   │      └── place_order
   │
   ├──► [ Billing & Invoices ]
   │      ├── check_unpaid_invoices
   │      ├── get_client_invoices
   │      └── get_invoice_pdf
   │
   ├──► [ Support Ticketing ]
   │      ├── get_client_tickets
   │      ├── get_ticket_details
   │      ├── open_support_ticket
   │      ├── reply_to_ticket
   │      ├── close_support_ticket
   │      └── reopen_support_ticket
   │
   ├──► [ Client Profile & Messaging ]
   │      ├── get_client_profile
   │      ├── update_client_profile
   │      └── send_email
   │
   └──► [ Security Guardrails & Admin ]
          ├── request_admin_approval
          └── process_admin_decision`}</pre>
</div>
        </section>

        {/* Key Features & Engineering Challenges */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Key Technical Breakthroughs<span className="text-violet-500">.</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                {/* <LuLayers className="text-violet-400" /> */} 1. Context Window & Memory Optimization
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Multi-turn WhatsApp conversations can rapidly bloat LLM context limits. Custom context-trimming middleware summarizes long historical dialogues while maintaining key state variables (e.g., target domain name, active client ID, selected service context) to maintain low latency and eliminate token limits.
              </p>
            </div>

            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                {/* <LuLock className="text-violet-400" /> */} 2. Human-in-the-Loop Admin Approval Guardrails
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Allowing an LLM direct API execution to perform account modifications introduces high operational risk. For sensitive tools like <code className="text-violet-300 bg-viole-950/50 px-1.5 py-0.5 rounded font-mono text-xs">reset_hosting_password</code> or <code className="text-violet-300 bg-violet-950/50 px-1.5 py-0.5 rounded font-mono text-xs">update_nameserver</code>, the agent triggers an approval flag, notifies administrative staff, and pauses tool execution until manual verification is submitted.
              </p>
            </div>

            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                {/* <LuZap className="text-violet-400" /> */} 3. Sub-Second Response Latency
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                By leveraging <strong>Groq API</strong> for ultra-fast model inference and delegating database calls and RAG lookups to FastAPI <code className="text-violet-300 bg-viole-950/50 px-1.5 py-0.5 rounded font-mono text-xs">BackgroundTasks</code>, the assistant responds in real-time under high webhook traffic without dropping incoming client requests.
              </p>
            </div>
          </div>
        </section>

        {/* Integrated Tools List */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Integrated Business Automation Tools<span className="text-violet-500">.</span>
          </h2>
          <p className="text-sm text-zinc-400">
            The agent features a suite of custom Python tool definitions capable of executing complex WHMCS operations:
          </p>

          <div className="flex flex-wrap gap-2">
            {toolsList.map((tool, idx) => (
              <span 
                key={idx}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#13111F]/80 border border-violet-950/40 text-violet-300/90"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Tech Stack Summary Table */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Tech Stack Rationale<span className="text-violet-500">.</span>
          </h2>

          <div className="bg-black/20 border border-violet-950/30 rounded-2xl overflow-hidden">
            <div className="divide-y divide-violet-950/30">
              {techStack.map((item, idx) => (
                <div key={idx} className="p-4 sm:px-6 flex items-center justify-between text-sm">
                  <span className="font-bold text-white font-mono">{item.name}</span>
                  <span className="text-zinc-500">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <div className="border-t border-violet-950/40 pt-8 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="text-sm font-mono text-violet-400 hover:text-violet-300 flex items-center gap-2 transition-colors"
          >
            <LuArrowLeft size={16} /> Return to all projects
          </Link>
          {/* <a
            href="mailto:kaze000111@gmail.com"
            className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Inquire about similar builds →
          </a> */}
        </div>

      </div>
    </main>
  );
}