import Link from "next/link";
import { LuArrowLeft, LuExternalLink } from "react-icons/lu";

export const metadata = {
  title: "GoRoom.pk Case Study | Faisal Abbas",
  description:
    "A full-stack multi-hotel booking platform and private management dashboard built for 9 hotels.",
};

const techStack = [
  {
    name: "Next.js",
    role: "Application framework, frontend, server-side rendering and server logic",
  },
  {
    name: "TypeScript",
    role: "Type-safe application development",
  },
  {
    name: "PostgreSQL",
    role: "Relational data storage for hotels, rooms, users and bookings",
  },
  {
    name: "Prisma",
    role: "Database schema, queries, relations and migrations",
  },
  {
    name: "better-auth",
    role: "Authentication and session management",
  },
  {
    name: "TanStack Query",
    role: "Client-side data fetching, caching and server-state management",
  },
  {
    name: "Tailwind CSS",
    role: "Application styling and responsive UI",
  },
];

const coreFeatures = [
  {
    number: "01",
    title: "Multi-Hotel Search",
    description:
      "Guests can search across 9 properties and narrow results based on location, availability and guest requirements.",
  },
  {
    number: "02",
    title: "Room Availability",
    description:
      "The booking flow checks room availability before allowing a reservation to be created.",
  },
  {
    number: "03",
    title: "Online Reservations",
    description:
      "Guests can complete the reservation process online instead of relying on phone calls and manual booking records.",
  },
  {
    number: "04",
    title: "Guest Accounts",
    description:
      "Authenticated users can manage their profile and access their booking history.",
  },
  {
    number: "05",
    title: "Manager Dashboard",
    description:
      "Hotel managers have a private interface for viewing operational and booking information.",
  },
  {
    number: "06",
    title: "Business Analytics",
    description:
      "The management interface exposes booking, revenue and occupancy information to help managers understand hotel performance.",
  },
];

const engineeringDecisions = [
  {
    number: "01",
    title: "Relational Data Model",
    description:
      "Hotels, rooms, users and bookings are represented as related database entities instead of treating reservations as isolated records.",
  },
  {
    number: "02",
    title: "Server-Centric Application",
    description:
      "Next.js App Router provides both the customer-facing application and server-side application logic, keeping the system consolidated.",
  },
  {
    number: "03",
    title: "Typed Database Access",
    description:
      "Prisma provides a typed interface over PostgreSQL and keeps database operations tied to the application's schema.",
  },
  {
    number: "04",
    title: "Dedicated Authentication Layer",
    description:
      "Authentication and sessions are handled through better-auth rather than being implemented as ad-hoc application logic.",
  },
  {
    number: "05",
    title: "Server State Management",
    description:
      "TanStack Query is used where client-side server-state management and caching are useful, while server-rendered application data remains close to the server.",
  },
  {
    number: "06",
    title: "Separate Guest and Manager Experiences",
    description:
      "The public booking experience and private management functionality are treated as different product surfaces with different responsibilities.",
  },
];

const responsibilities = [
  "Application architecture",
  "Frontend development",
  "Server-side application logic",
  "PostgreSQL database design",
  "Prisma schema and queries",
  "Authentication and sessions",
  "Hotel and room search",
  "Availability logic",
  "Booking workflow",
  "Manager dashboard",
  "Revenue and occupancy views",
  "Responsive UI implementation",
];

const projectFlow = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the existing hospitality workflow and identify which manual operations the new platform needed to replace.",
  },
  {
    number: "02",
    title: "Data Modeling",
    description:
      "Design the relational structure around hotels, rooms, users and reservations before implementing the booking experience.",
  },
  {
    number: "03",
    title: "Guest Experience",
    description:
      "Build the public hotel discovery, room search, availability and reservation flow.",
  },
  {
    number: "04",
    title: "Management Layer",
    description:
      "Build a private dashboard that gives hotel managers access to operational and business information.",
  },
];

export default function GoRoomCaseStudy() {
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
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-400">
              Client Project
            </span>

            <span className="rounded-md border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-500">
              Hospitality
            </span>

            <span className="rounded-md border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-500">
              Sole Developer
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            GoRoom.pk — Multi-Hotel Booking Platform
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
            A full-stack booking platform built to replace an older WordPress
            presence with a centralized system for hotel discovery, room
            availability, online reservations, guest accounts and private
            hotel management.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.goroom.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Visit Live Platform
              <LuExternalLink size={15} />
            </a>
          </div>
        </header>

        {/* Project facts */}
        <section className="border-b border-zinc-800 py-10">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-4">
            {[
              ["Properties", "9 Hotels"],
              ["Platform", "Web Application"],
              ["Database", "PostgreSQL"],
              ["Developer", "Sole Developer"],
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

        {/* Context */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Context</SectionHeading>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionLabel>Before</SectionLabel>

              <p className="text-sm leading-7 text-zinc-400">
                The business was operating with an older WordPress-based
                website that did not provide a centralized online booking
                workflow.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Availability checks, price calculations and reservation
                records depended heavily on hotel staff handling requests
                manually.
              </p>
            </div>

            <div>
              <SectionLabel>After</SectionLabel>

              <p className="text-sm leading-7 text-zinc-400">
                GoRoom.pk introduced a dedicated booking application where
                guests can discover properties, check rooms and make
                reservations online.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                The platform also provides a private management interface for
                hotel staff to work with booking and business information.
              </p>
            </div>
          </div>
        </section>

        {/* Project approach */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Implementation Approach</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            Rather than treating the project as a collection of individual
            pages, I built it around the underlying hotel and reservation
            domain. The database model became the foundation for the guest
            booking experience and the manager dashboard.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {projectFlow.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-zinc-800 bg-black/20 p-6"
              >
                <span className="font-mono text-xs text-zinc-600">
                  {step.number}
                </span>

                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>System Architecture</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            GoRoom uses Next.js as the application layer, with PostgreSQL as
            the persistent data store and Prisma providing typed database
            access.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="min-w-[680px] font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm">
{`                         [ Guest ]
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
          [ Search ]    [ Hotels ]    [ Account ]
              │             │             │
              └─────────────┼─────────────┘
                            │
                            ▼
                      [ Booking ]
                            │
                            ▼
                    ┌───────────────┐
                    │    Next.js    │
                    │  Application  │
                    └───────┬───────┘
                            │
                            ▼
                    [ Prisma ORM ]
                            │
                            ▼
                    [ PostgreSQL ]
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
       [ Guest Data ]              [ Hotel Data ]
                                          │
                                          ▼
                                [ Manager Dashboard ]
                                          │
                              ┌───────────┼───────────┐
                              ▼           ▼           ▼
                         [Bookings] [Revenue] [Occupancy]`}
            </pre>
          </div>
        </section>

        {/* Booking flow */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Booking Workflow</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The core user journey is centered around turning hotel discovery
            into a reservation without requiring the guest to contact the
            hotel manually.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-black/20 p-6">
            <div className="overflow-x-auto">
              <div className="flex min-w-[720px] items-center justify-between gap-3">
                {[
                  "Search",
                  "Select Hotel",
                  "Select Room",
                  "Check Availability",
                  "Reserve",
                  "Booking Record",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3">
                      <p className="font-mono text-xs text-zinc-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-1 whitespace-nowrap text-sm text-white">
                        {step}
                      </p>
                    </div>

                    {index < 5 && (
                      <span className="font-mono text-zinc-700">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
            The important part of this flow is the relationship between room
            inventory and reservations. The booking process is backed by
            persistent database state rather than being treated as a simple
            frontend form submission.
          </p>
        </section>

        {/* Features */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Core Features</SectionHeading>

          <div className="grid gap-4 md:grid-cols-2">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-800 bg-black/20 p-6"
              >
                <span className="font-mono text-xs text-zinc-600">
                  {feature.number}
                </span>

                <h3 className="mt-4 font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Manager dashboard */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Manager Dashboard</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The platform is not only a customer-facing booking website. A
            separate private management experience gives hotel staff access
            to information generated by the booking system.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
            {[
              ["Bookings", "View and work with reservation information."],
              [
                "Revenue",
                "Monitor revenue generated through the booking platform.",
              ],
              [
                "Occupancy",
                "Understand room utilization across the hotel.",
              ],
              [
                "Operational Data",
                "Provide managers with a centralized view of hotel activity.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="grid gap-2 border-b border-zinc-800 bg-black/20 p-5 last:border-b-0 sm:grid-cols-[160px_1fr]"
              >
                <span className="font-mono text-sm text-white">{title}</span>

                <span className="text-sm leading-6 text-zinc-500">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering decisions */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Engineering Decisions</SectionHeading>

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

        {/* Data model */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Data Model</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            The database is centered around the entities required to operate a
            multi-hotel booking platform. Prisma defines the application schema
            and provides typed access to PostgreSQL.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="min-w-[600px] font-mono text-xs leading-7 text-zinc-400 sm:text-sm">
{`User
 │
 └── Booking
       │
       └── Room
             │
             └── Hotel

Hotel
 ├── Rooms
 └── Manager / operational data`}
            </pre>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
            Modeling these relationships explicitly allows the booking system,
            guest accounts and manager dashboard to operate over the same
            underlying source of truth.
          </p>
        </section>

        {/* Tech stack */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Technology</SectionHeading>

          <div className="overflow-hidden rounded-xl border border-zinc-800">
            {techStack.map((technology) => (
              <div
                key={technology.name}
                className="grid gap-2 border-b border-zinc-800 bg-black/20 p-5 last:border-b-0 sm:grid-cols-[210px_1fr]"
              >
                <span className="font-mono text-sm font-semibold text-white">
                  {technology.name}
                </span>

                <span className="text-sm leading-6 text-zinc-500">
                  {technology.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* My role */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>My Role</SectionHeading>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400">
            I was the sole developer responsible for taking the platform from
            the initial application architecture through implementation. This
            included both the customer-facing booking experience and the
            private management side of the system.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="border-b border-zinc-900 py-2.5 font-mono text-xs text-zinc-400"
              >
                {responsibility}
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="border-b border-zinc-800 py-14">
          <SectionHeading>Outcome</SectionHeading>

          <div className="grid gap-4 sm:grid-cols-3">
            <OutcomeCard
              value="9"
              label="Hotels"
              description="Properties represented within one booking platform."
            />

            <OutcomeCard
              value="1"
              label="Platform"
              description="Centralized guest booking and hotel management system."
            />

            <OutcomeCard
              value="0"
              label="Manual-first Booking"
              description="Guests no longer need to rely entirely on phone-based reservations."
            />
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-zinc-500">
            The project demonstrates a complete transition from a primarily
            informational hotel website to an application backed by structured
            data, authentication, booking workflows and operational tooling.
          </p>
        </section>

        {/* Takeaway */}
        <section className="py-14">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            <SectionLabel>Engineering takeaway</SectionLabel>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
              The challenge was not building a hotel website. It was building
              the system behind one.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              GoRoom gave me practical experience designing a real application
              around a business domain: modeling relationships, handling
              authenticated users, connecting reservations to persistent data,
              and exposing that data through separate customer and management
              experiences.
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
            href="https://www.goroom.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-white"
          >
            Visit GoRoom.pk
            <LuExternalLink size={14} />
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
    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
      {children}
    </p>
  );
}

function OutcomeCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-black/20 p-6">
      <p className="font-mono text-3xl font-semibold text-white">{value}</p>

      <p className="mt-2 text-sm font-semibold text-zinc-300">{label}</p>

      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </div>
  );
}