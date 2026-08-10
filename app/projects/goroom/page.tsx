import React from 'react';
import Link from 'next/link';
import {
  LuArrowLeft,
  LuBuilding2,
  LuDatabase,
  LuExternalLink,
  LuLayoutDashboard,
  LuPhoneOff,
} from 'react-icons/lu';

export const metadata = {
  title: 'GoRoom.pk Case Study | Faisal Abbas',
  description:
    'A full-stack hotel booking platform and private manager dashboard built for 9 hotels.',
};

export default function GoRoomCaseStudy() {
  const techStack = [
    {
      name: 'Next.js (App Router)',
      role: 'Frontend, backend & server-side rendering',
    },
    {
      name: 'TypeScript',
      role: 'Type-safe application development',
    },
    {
      name: 'PostgreSQL',
      role: 'Main database',
    },
    {
      name: 'Prisma ORM',
      role: 'Database queries, schema & migrations',
    },
    {
      name: 'better-auth',
      role: 'Authentication & sessions',
    },
    {
      name: 'TanStack Query',
      role: 'Client-side data fetching & caching',
    },
    {
      name: 'Tailwind CSS',
      role: 'UI styling',
    },
  ];

  const coreFeatures = [
    {
      title: 'Multi-Hotel Search',
      desc: 'Guests can search across 9 hotels and filter rooms by location, availability, and number of guests.',
    },
    {
      title: 'Online Booking',
      desc: 'Guests can check room availability and make reservations online instead of calling the hotel.',
    },
    {
      title: 'Private Manager Dashboard',
      desc: 'A private dashboard where managers can view bookings, revenue, occupancy, and other hotel data.',
    },
    {
      title: 'User Accounts',
      desc: 'Guests can create accounts, manage their profiles, and view their booking history.',
    },
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
              Client Project • Hospitality
            </span>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Sole Developer
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            GoRoom.pk — Multi-Hotel Booking Platform
            <span className="text-violet-500">.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            A full-stack hotel booking platform built to replace an old
            WordPress website and make bookings easier for guests and hotel
            managers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.goroom.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-violet-950/50"
            >
              <LuExternalLink size={16} />
              Visit Live Platform
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            {
              label: 'Hotels',
              val: '9 Properties',
              icon: LuBuilding2,
            },
            {
              label: 'Booking',
              val: 'Online Reservations',
              icon: LuPhoneOff,
            },
            {
              label: 'Database',
              val: 'PostgreSQL',
              icon: LuDatabase,
            },
            {
              label: 'Dashboard',
              val: 'Private Manager CRM',
              icon: LuLayoutDashboard,
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
                The Old System
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                The business was using a WordPress website without a proper
                booking system or database. Hotel staff had to answer phone
                calls, check room availability, calculate prices, and record
                bookings manually.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                The New Platform
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                I built the platform from scratch. Guests can search across
                all 9 hotels, check available rooms, and make reservations
                online. Hotel managers can use a private dashboard to manage
                bookings and view business data.
              </p>
            </div>

          </div>
        </section>

        {/* Architecture */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            System Architecture
            <span className="text-violet-500">.</span>
          </h2>

          <p className="text-sm text-zinc-400 leading-relaxed">
            The platform uses Next.js for the application and server-side
            logic, with PostgreSQL and Prisma for the database.
          </p>

          <div className="bg-[#0E1117] border border-violet-950/40 rounded-2xl p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-violet-300">
            <pre>{`[ Guest / Customer ]
        │
        ├──► [ Search & Filters ]
        │
        ├──► [ Hotels & Rooms ]
        │
        └──► [ Booking ]
                 │
                 ▼
        [ Next.js Application ]
                 │
                 ▼
        [ PostgreSQL + Prisma ]
                 │
          ┌──────┴──────────┐
          ▼                 ▼
   [ Guest Bookings ]  [ Manager Dashboard ]
                         │
                         ├── Bookings
                         ├── Revenue
                         └── Occupancy`}</pre>
          </div>
        </section>

        {/* Features */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Main Features
            <span className="text-violet-500">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-black/20 border border-violet-950/30 p-6 rounded-2xl"
              >
                <h3 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
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
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              I was the sole developer on this project and worked on the
              entire system from start to finish.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                'Frontend',
                'Backend',
                'Database Design',
                'Authentication',
                'Search & Filtering',
                'Booking System',
                'Manager Dashboard',
                'Server Logic',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {item}
                </div>
              ))}
            </div>
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