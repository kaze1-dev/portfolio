import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { LuArrowLeft } from 'react-icons/lu';
import VideoDemo from './videoDemo';

export const metadata = {
  title: 'WhatsApp AI Support Agent Case Study | Faisal Abbas',
  description:
    'A WhatsApp AI support agent connected to WHMCS to automate hosting and domain support.',
};

export default function WhatsAppAgentCaseStudy() {
  const techStack = [
    { name: 'FastAPI', role: 'Backend' },
    { name: 'LangChain & LangGraph', role: 'AI agent & workflow' },
    { name: 'WHMCS API', role: 'Hosting & billing system' },
    { name: 'Evolution API', role: 'WhatsApp connection' },
    { name: 'Groq Cloud API', role: 'LLM inference' },
    { name: 'Docker', role: 'Application containers' },
    { name: 'PostgreSQL / Redis', role: 'Agent state & memory' },
  ];

  const toolsList = [
    'search_tricasol_knowledge_base',
    'check_registered_domains',
    'check_domain_availability',
    'update_nameserver',
    'get_domain_epp_code',
    'toggle_id_protection',
    'renew_domain',
    'get_client_products',
    'reset_hosting_password',
    'get_cpanel_sso_link',
    'check_unpaid_invoices',
    'get_client_invoices',
    'get_invoice_pdf',
    'open_support_ticket',
    'reply_to_ticket',
    'request_admin_approval',
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-12 text-zinc-400 sm:py-20">
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

        <div className="mb-12 border-b border-zinc-800 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-xs font-mono font-semibold text-zinc-300">
              Client Project • Tricasol
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            WhatsApp AI Support Agent<span className="text-zinc-300">.</span>
          </h1>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            An AI support agent that works on WhatsApp and connects to WHMCS.
            It can answer customer questions, check domains, manage hosting
            services, handle invoices, and work with support tickets.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/kaze1-dev/tricasol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-zinc-500"
            >
              <BsGithub size={18} />
              View Repository
            </a>
            <VideoDemo />
          </div>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Response', val: 'Sub-Second' },
            { label: 'Tools', val: '20+ Actions' },
            { label: 'Security', val: 'Admin Approval' },
            { label: 'Integration', val: 'WHMCS API' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-black/30 p-4"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-bold text-white sm:text-base">
                {item.val}
              </p>
            </div>
          ))}
        </div>

        <section className="mb-14 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            The Problem & Solution<span className="text-zinc-300">.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-zinc-200">
                The Problem
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Hosting companies receive many repeated support requests.
                Customers often ask about unpaid invoices, domain availability,
                passwords, hosting services, and support tickets. Handling all
                of these requests manually takes a lot of time.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">
                The AI Solution
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                I built an AI agent that works through WhatsApp and connects
                directly to WHMCS. Customers can simply send a message and the
                agent can find information or perform supported actions for them.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            How It Works<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            When a customer sends a WhatsApp message, it is sent to the backend
            through Evolution API. FastAPI receives the message and passes it to
            the AI agent. The agent decides what it needs to do and can use the
            available tools to get information or perform actions.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
            <pre>{`[ Customer WhatsApp ]
          │
          │ Message
          ▼
[ Evolution API ]
          │
          │ Webhook
          ▼
[ FastAPI Backend ]
          │
          ├──► [ LangGraph Agent ]
          │
          ├──► [ Conversation Memory ]
          │
          ├──► [ RAG Knowledge Base ]
          │
          └──► [ AI Tools ]
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
      [ WHMCS ]  [ Domains ] [ Tickets ]
          │
          ▼
[ Response sent back to WhatsApp ]`}</pre>
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            What the AI Agent Can Do<span className="text-zinc-300">.</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: 'Domain Management',
                desc: 'Check domains, check availability, update nameservers, get EPP codes, enable or disable ID protection, and renew domains.',
              },
              {
                title: 'Hosting Management',
                desc: 'View customer hosting products, reset hosting passwords, and generate cPanel login links.',
              },
              {
                title: 'Invoices & Billing',
                desc: 'Check unpaid invoices, view customer invoices, and get invoice PDFs.',
              },
              {
                title: 'Support Tickets',
                desc: 'Create, read, reply to, close, and reopen support tickets.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-black/20 p-6"
              >
                <h3 className="mb-2 text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Technical Challenges<span className="text-zinc-300">.</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: '1. Conversation Memory',
                text: 'WhatsApp conversations can become very long. Sending the entire conversation to the AI every time uses too many tokens and makes responses slower.',
                detail:
                  'I added context trimming so older messages can be summarized while important information, such as the domain name and customer ID, is kept.',
              },
              {
                title: '2. Admin Approval for Sensitive Actions',
                text: 'Some actions are too sensitive to let the AI perform automatically. For example, changing a nameserver or resetting a hosting password.',
                detail:
                  'For these actions, the agent asks an admin for approval first. The action only runs after the admin approves it.',
              },
              {
                title: '3. Fast Responses',
                text: 'The agent uses Groq for fast LLM responses. I also moved longer tasks to background processing so the WhatsApp webhook can respond quickly.',
              },
            ].map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-2xl border border-zinc-800 bg-black/20 p-6"
              >
                <h3 className="mb-2 text-base font-bold text-white">
                  {challenge.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {challenge.text}
                </p>
                {challenge.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {challenge.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            AI Tools<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm text-zinc-400">
            I built custom tools that allow the AI agent to interact with the
            company&apos;s systems.
          </p>

          <div className="flex flex-wrap gap-2">
            {toolsList.map((tool, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-mono text-zinc-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Tech Stack<span className="text-zinc-300">.</span>
          </h2>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black/20">
            <div className="divide-y divide-zinc-800">
              {techStack.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 p-4 text-sm sm:px-6"
                >
                  <span className="font-mono font-bold text-white">{item.name}</span>
                  <span className="text-right text-zinc-500">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            My Role<span className="text-zinc-300">.</span>
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
            <p className="text-sm leading-relaxed text-zinc-400">
              I built the AI agent and backend system, connected it to WhatsApp
              and WHMCS, and worked on the AI tools, memory, security checks,
              and background processing.
            </p>
          </div>
        </section>

        <div className="flex items-center justify-between border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-mono text-zinc-300 transition-colors hover:text-white"
          >
            <LuArrowLeft size={16} />
            Return to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}