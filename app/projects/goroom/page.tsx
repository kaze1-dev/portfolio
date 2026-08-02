import React from 'react';
import Link from 'next/link';
import { 
  LuArrowLeft, 
  LuBuilding2, 
  LuCalendarCheck, 
  LuShieldCheck, 
  LuZap, 
  LuServer, 
  LuDatabase, 
  LuLock, 
  LuLayers,
  LuExternalLink,
  LuLayoutDashboard,
  LuFilter,
  LuPhoneOff
} from 'react-icons/lu';

export const metadata = {
  title: "GoRoom.pk Case Study | Faisal Abbas",
  description: "End-to-end engineering breakdown of a multi-hotel booking platform and internal CRM managing 9 luxury properties.",
};

export default function GoRoomCaseStudy() {
  const techStack = [
    { name: "Next.js (App Router)", role: "Full-Stack Framework & SSR" },
    { name: "TypeScript", role: "Type-Safe Application Layer" },
    { name: "PostgreSQL", role: "Relational Database Engine" },
    { name: "Prisma ORM", role: "Database Migration & Schema Modeling" },
    { name: "better-auth", role: "Secure Authentication & Session Handling" },
    { name: "TanStack Query", role: "Client-Side Data Fetching & Caching" },
    { name: "Tailwind CSS", role: "Component UI Styling" },
  ];

  const coreFeatures = [
    {
      title: "Multi-Property Search Engine",
      desc: "Fast property and room filtering built for 9 luxury hotels with dynamic location, availability, and guest capacity controls."
    },
    {
      title: "Automated Reservation Engine",
      desc: "Replaced manual phone call bookings with real-time room availability checks and instant digital reservations."
    },
    {
      title: "Private Manager CRM & Analytics",
      desc: "A secured internal admin portal providing real-time tracking of overall bookings, property occupancy, and revenue streams."
    },
    {
      title: "Secure Account System",
      desc: "Client authentication layer enabling guest profile management, reservation histories, and direct booking management."
    }
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
              Client Project • Hospitality
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Sole Lead Engineer
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            GoRoom.pk — Multi-Hotel Booking Platform<span className="text-violet-500">.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            An end-to-end digital transformation replacing an outdated WordPress site with an automated booking platform and internal CRM manager for 9 luxury hotel properties.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.goroom.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-violet-950/50"
            >
              <LuExternalLink size={16} /> Visit Live Platform
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Managed Scale", val: "9 Hotel Properties", icon: LuBuilding2 },
            { label: "Operational Win", val: "Zero Phone Bottleneck", icon: LuPhoneOff },
            { label: "Database Layer", val: "PostgreSQL & Prisma", icon: LuDatabase },
            { label: "Admin Suite", val: "Private CRM & Revenue", icon: LuLayoutDashboard },
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
            The Operational Bottleneck & Solution<span className="text-violet-500">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-3 flex items-center gap-2">
                Legacy WordPress System
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The business operated on a static WordPress site with no backend database or booking integration. Staff members spent hours taking manual phone calls to verify room availability, calculate rates, and manually log guest reservations, creating massive operational friction and lost sales.
              </p>
            </div>

            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                The Full-Stack Platform
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I engineered an automated platform from the ground up. Guests can now search across all 9 properties, view live room availability, filter by preferences, and complete reservations online. Managers get a private CRM dashboard to oversee revenue and bookings effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            System Architecture<span className="text-violet-500">.</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The platform relies on Next.js App Router for server-rendered page delivery and optimized API routes, backed by PostgreSQL and Prisma for relational integrity across multi-property listings.
          </p>

          <div className="bg-[#0E1117] border border-violet-950/40 rounded-2xl p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-violet-300">
            <pre>{`[ Guest / Customer Browser ]
       │
       ├──► [ Search & Filter Engine ] ── (Fast Multi-Property Query)
       │
       ├──► [ Reservation Flow ] ──► [ Next.js Server Actions ]
       │                                       │
       │                                       ▼
       │                          [ PostgreSQL DB + Prisma ORM ]
       │                                       │
       └───────────────────────────────────────┼──────────────────────┐
                                               ▼                      ▼
                                     [ Guest Reservation ]   [ Internal CRM Dashboard ]
                                    (Automated Confirmation)  (Revenue & Booking Stats)`}</pre>
          </div>
        </section>

        {/* Key Features Breakdown */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Key Platform Capabilities<span className="text-violet-500">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreFeatures.map((feat, idx) => (
              <div key={idx} className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  {/* <LuZap className="text-violet-400" /> */} {feat.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
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
            Inquire about custom platform builds →
          </a> */}
        </div>

      </div>
    </main>
  );
}