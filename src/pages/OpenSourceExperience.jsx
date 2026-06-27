import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaCodeBranch,
  FaDesktop,
  FaServer,
  FaFileCode,
} from "react-icons/fa";

import { organizations } from "../data/contributions";

function OpenSourceExperience() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="fixed left-8 top-0 hidden h-screen lg:block">
        <div className="relative h-full w-px bg-white/5">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-violet-500 to-transparent" />
        </div>
      </div>

      {/* Background Glow */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      </div>

      <section className="mx-auto max-w-7xl px-8 pt-24 pb-20">

        {/* Back */}

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-gray-400 transition hover:text-violet-400"
        >
          <FaArrowLeft />

          Back to Portfolio
        </Link>

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mt-14"
        >

          <span className="uppercase tracking-[0.35em] text-violet-400 text-sm font-semibold">

            OPEN SOURCE

          </span>

          <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[1.1]">

            Building Software

            <br />

            Through

            <span className="text-violet-400">

              {" "}Real Contributions

            </span>

          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">

            Contributing to production repositories across frontend,
            backend, accessibility and UI/UX while collaborating
            with maintainers through pull requests and issue discussions.

          </p>

          <a
            href="https://github.com/haniigupta"
            target="_blank"
            rel="noreferrer"
            className="
            group
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-violet-500/30
            bg-white/[0.05]
            px-7
            py-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-400
            hover:shadow-[0_0_35px_rgba(139,92,246,.35)]
            "
          >

            <FaGithub />

            GitHub Profile

            <span className="transition group-hover:translate-x-1">

              →

            </span>

          </a>

        </motion.div>

      </section>

      {/* Timeline */}

      {/* Organizations */}

      <section className="mx-auto max-w-7xl px-8 py-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            Open Source Programs
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Communities where I've contributed through production-ready pull requests
            and issue discussions.
          </p>
        </motion.div>

        <div className="mt-20 space-y-16">

          {organizations.map((org) => (

            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              className="border-b border-white/10 pb-12"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">

                {/* Left */}

                <div className="max-w-3xl">

                  <span className="text-sm uppercase tracking-[0.25em] text-violet-400">

                    {org.duration}

                  </span>

                  <h3 className="mt-3 text-4xl font-bold">

                    {org.title}

                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-400">

                    {org.subtitle}

                  </p>

                </div>

                {/* Right */}

                <div className="grid grid-cols-2 gap-10 shrink-0">

                  <div>

                    <p className="text-3xl font-bold text-violet-400">

                      {org.prCount}

                    </p>

                    <span className="text-sm text-gray-500">

                      Pull Requests

                    </span>

                  </div>

                  <div>

                    <p className="text-3xl font-bold text-violet-400">

                      {org.issueCount}

                    </p>

                    <span className="text-sm text-gray-500">

                      Issues

                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      <div className="mx-auto max-w-7xl px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      {/* Featured Pull Requests */}

      <section className="mx-auto max-w-6xl px-8 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            Featured Contributions
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
            Production-ready fixes and improvements merged into open source projects,
            focused on user experience, reliability and maintainable engineering.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20">

          {[
            {
              no: "01",
              repo: "WalletWise",

              title: "Add Reusable ConfirmDialog for Modal Close Confirmation",

              problem:
                "Closing dialogs with unsaved changes could accidentally discard user actions without confirmation.",

              impact: [
                "Implemented a reusable confirmation dialog component.",
                "Improved UX by preventing accidental data loss across modal workflows."
              ],

              tech: ["React", "UI"],

              url: "https://github.com/SoumyaMishra-7/WalletWise/pull/237",
            },

            {
              no: "02",

              repo: "Innovision",

              title: "Add Proper Loading Component When API Fails",

              problem:
                "The application displayed an indefinite loading state whenever API requests failed.",

              impact: [
                "Added proper loading and fallback handling.",
                "Improved user experience during API failures."
              ],

              tech: ["React", "Component Design"],

              url: "https://github.com/ItsVikasA/Innovision-Open-Source/pull/81",
            },

            {
              no: "03",

              repo: "DevEvent Tracker",

              title: "Fix Invalid Cache & Redis Authentication Loading",

              problem:
                "Invalid cache behaviour caused inconsistent authentication loading and application rendering.",

              impact: [
                "Resolved cache-related rendering issues.",
                "Improved authentication loading reliability."
              ],

              tech: ["Next.js", "Backend"],

              url: "https://github.com/niharika-mente/DevEvent_Tracker/pull/123",
            },

            {
              no: "04",

              repo: "File Sharing System",

              title: "Fix Authentication Loading When Redis Is Unavailable",

              problem:
                "Users could become stuck while authentication waited for an unavailable Redis instance.",

              impact: [
                "Added graceful fallback behaviour when Redis is unavailable.",
                "Improved login reliability and application stability."
              ],

              tech: ["MongoDB", "Node.js"],

              url: "https://github.com/imanchalsingh/File-Sharing-System/pull/29",
            },
          ].map((item) => (
            <motion.article
              key={item.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-16"
            >
              <div className="flex items-start gap-8">
                <span className="text-6xl font-black text-violet-500/20 shrink-0">
                  {item.no}
                </span>

                <div className="flex-1">
                  <p className="uppercase tracking-[0.25em] text-sm text-violet-400">
                    {item.repo}
                  </p>

                  <h3 className="mt-3 text-4xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-10 space-y-8">

                    <div>
                      <h4 className="text-lg font-semibold">Problem</h4>
                      <p className="mt-3 leading-8 text-gray-400">{item.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">Impact</h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
                        {item.impact.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">Tech</h4>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-violet-500/30 px-4 py-2 text-sm text-violet-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-lg font-semibold">Pull Request</h4>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-3 text-violet-400 hover:gap-4 transition-all"
                      >
                        <FaCodeBranch />
                        View Pull Request →
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </motion.article>
          ))}

        </div>

      </section>

      {/* Engineering Impact */}

      <section className="mx-auto max-w-6xl px-8 py-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <div className="flex items-center gap-4">
            <div className="h-14 w-1 rounded-full bg-violet-500" />
            <h2 className="text-5xl font-black">
              Engineering Impact
            </h2>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Beyond writing code, I focused on solving real user problems,
            improving maintainability and delivering production-ready
            improvements across multiple open-source repositories.
          </p>

        </motion.div>

        <div className="mt-20 space-y-16">

          {[
            {
              icon: <FaDesktop />,
              color: "text-violet-400 border-violet-500/40",
              title: "UI / UX Improvements",
              desc: "Improved navigation, dashboard feedback, responsive layouts, accessibility and interaction design across production React applications."
            },
            {
              icon: <FaServer />,
              color: "text-cyan-400 border-cyan-500/40",
              title: "Backend Reliability",
              desc: "Resolved authentication issues, cache failures, Redis fallback behaviour and application stability problems affecting users."
            },
            {
              icon: <FaFileCode />,
              color: "text-emerald-400 border-emerald-500/40",
              title: "Code Quality & Documentation",
              desc: "Improved reusable components, documentation, repository setup and developer experience for future contributors."
            }
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-2xl border bg-white/[0.03] text-3xl ${item.color}`}>
                {item.icon}
              </div>

              <div className="border-l-2 border-white/10 pl-8">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-9 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </section>




    </main >
  );
}

export default OpenSourceExperience;