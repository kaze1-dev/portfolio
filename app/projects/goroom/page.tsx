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
              Client Project • Hospitality
            </span>

            <span className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Sole Developer
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            GoRoom.pk — Multi-Hotel Booking Platform
            <span className="text-zinc-300">.</span>
          </h1>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            A full-stack hotel booking platform built to replace an old WordPress
            website and make bookings easier for guests and hotel managers.
          </p>

          <a
            href="https://www.goroom.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            <LuExternalLink size={16} />
            Visit Live Platform
          </a>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Hotels', val: '9 Properties', icon: LuBuilding2 },
            { label: 'Booking', val: 'Online Reservations', icon: LuPhoneOff },
            { label: 'Database', val: 'PostgreSQL', icon: LuDatabase },
            {
              label: 'Dashboard',
              val: 'Private Manager CRM',
              icon: LuLayoutDashboard,
            },
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
                The Old System
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                The business was using a WordPress website without a proper
                booking system or database. Hotel staff had to answer phone
                calls, check room availability, calculate prices, and record
                bookings manually.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">
                The New Platform
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                I built the platform from scratch. Guests can search across all
                9 hotels, check available rooms, and make reservations online.
                Hotel managers can use a private dashboard to manage bookings
                and view business data.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            System Architecture<span className="text-zinc-300">.</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            The platform uses Next.js for the application and server-side logic,
            with PostgreSQL and Prisma for the database.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
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

        <section className="mb-14 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Main Features<span className="text-zinc-300">.</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {coreFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-black/20 p-6"
              >
                <h3 className="mb-2 text-base font-bold text-white">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feat.desc}
                </p>
              </div>
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
                  <span className="font-mono font-bold text-white">
                    {item.name}
                  </span>
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
            <p className="mb-5 text-sm leading-relaxed text-zinc-400">
              I was the sole developer on this project and worked on the entire
              system from start to finish.
            </p>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
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
                <div key={item} className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {item}
                </div>
              ))}
            </div>
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