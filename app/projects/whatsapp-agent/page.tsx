import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import {
  LuArrowLeft,
} from 'react-icons/lu';

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
    <main className="min-h-screen bg-[#090D16] text-zinc-400 py-12 sm:py-20 px-4 relative overflow-hidden">

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-violet-400 transition-colors mb-10 group"
        >
          <LuArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-12 border-b border-violet-950/40 pb-10">

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
              Client Project • Tricasol
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            WhatsApp AI Support Agent
            <span className="text-violet-500">.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            An AI support agent that works on WhatsApp and connects to WHMCS.
            It can answer customer questions, check domains, manage hosting
            services, handle invoices, and work with support tickets.
          </p>

          {/* GitHub */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/kaze1-dev/tricasol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-violet-950/60 hover:border-violet-500/40 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <BsGithub size={18} />
              View Repository
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            {
              label: 'Response',
              val: 'Sub-Second',
            },
            {
              label: 'Tools',
              val: '20+ Actions',
            },
            {
              label: 'Security',
              val: 'Admin Approval',
            },
            {
              label: 'Integration',
              val: 'WHMCS API',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-black/30 border border-violet-950/30 p-4 rounded-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  {item.label}
                </p>

                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {item.val}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Problem & Solution */}
        <section className="mb-14 space-y-8">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            The Problem & Solution
            <span className="text-violet-500">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Problem */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

              <h3 className="text-lg font-semibold text-rose-400 mb-3">
                The Problem
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Hosting companies receive many repeated support requests.
                Customers often ask about unpaid invoices, domain
                availability, passwords, hosting services, and support
                tickets. Handling all of these requests manually takes a lot
                of time.
              </p>

            </div>

            {/* Solution */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                The AI Solution
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                I built an AI agent that works through WhatsApp and connects
                directly to WHMCS. Customers can simply send a message and
                the agent can find information or perform supported actions
                for them.
              </p>

            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            How It Works
            <span className="text-violet-500">.</span>
          </h2>

          <p className="text-sm text-zinc-400 leading-relaxed">
            When a customer sends a WhatsApp message, it is sent to the
            backend through Evolution API. FastAPI receives the message and
            passes it to the AI agent. The agent decides what it needs to do
            and can use the available tools to get information or perform
            actions.
          </p>

          <div className="bg-[#0E1117] border border-violet-950/40 rounded-2xl p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-violet-300">
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

        {/* AI Agent */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            What the AI Agent Can Do
            <span className="text-violet-500">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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
                className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl"
              >
                <h3 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Technical Challenges */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            Technical Challenges
            <span className="text-violet-500">.</span>
          </h2>

          <div className="space-y-4">

            {/* Memory */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

              <h3 className="text-base font-bold text-white mb-2">
                1. Conversation Memory
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                WhatsApp conversations can become very long. Sending the
                entire conversation to the AI every time uses too many tokens
                and makes responses slower.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                I added context trimming so older messages can be summarized
                while important information, such as the domain name and
                customer ID, is kept.
              </p>

            </div>

            {/* Approval */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

              <h3 className="text-base font-bold text-white mb-2">
                2. Admin Approval for Sensitive Actions
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Some actions are too sensitive to let the AI perform
                automatically. For example, changing a nameserver or
                resetting a hosting password.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                For these actions, the agent asks an admin for approval first.
                The action only runs after the admin approves it.
              </p>

            </div>

            {/* Speed */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

              <h3 className="text-base font-bold text-white mb-2">
                3. Fast Responses
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                The agent uses Groq for fast LLM responses. I also moved
                longer tasks to background processing so the WhatsApp webhook
                can respond quickly.
              </p>

            </div>

          </div>
        </section>

        {/* Tools */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            AI Tools
            <span className="text-violet-500">.</span>
          </h2>

          <p className="text-sm text-zinc-400">
            I built custom tools that allow the AI agent to interact with the
            company's systems.
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

        {/* Tech Stack */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            Tech Stack
            <span className="text-violet-500">.</span>
          </h2>

          <div className="bg-black/20 border border-violet-950/30 rounded-2xl overflow-hidden">

            <div className="divide-y divide-violet-950/30">

              {techStack.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:px-6 flex items-center justify-between gap-4 text-sm"
                >
                  <span className="font-bold text-white font-mono">
                    {item.name}
                  </span>

                  <span className="text-zinc-500 text-right">
                    {item.role}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* My Role */}
        <section className="mb-14 space-y-6">

          <h2 className="text-2xl font-bold text-white tracking-tight">
            My Role
            <span className="text-violet-500">.</span>
          </h2>

          <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">

            <p className="text-sm text-zinc-400 leading-relaxed">
              I built the AI agent and backend system, connected it to
              WhatsApp and WHMCS, and worked on the AI tools, memory,
              security checks, and background processing.
            </p>

          </div>

        </section>

        {/* Footer */}
        <div className="border-t border-violet-950/40 pt-8 flex items-center justify-between">

          <Link
            href="/#projects"
            className="text-sm font-mono text-violet-400 hover:text-violet-300 flex items-center gap-2 transition-colors"
          >
            <LuArrowLeft size={16} />
            Return to all projects
          </Link>

        </div>

      </div>
    </main>
  );
}