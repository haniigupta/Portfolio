import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

import { certificates } from "../data/certificate";

function Certificate() {
    return (
        <main className="min-h-screen bg-[#050816] text-white">

            {/* Background Glow */}

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

                <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

            </div>
            {/* hero section */}
            < section className="mx-auto max-w-[1500px] px-8 pt-24 pb-20" >

                <Link to="/" className="inline-flex items-center gap-3 text-gray-400 hover:text-violet-400 transition">
                    <FaArrowLeft /> Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="mt-14">

                    <span className="uppercase tracking-[0.35em] text-violet-400 text-sm font-semibold">
                        CERTIFICATIONS
                    </span>

                    <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[1.1]">
                        Verified Learning
                        <br />
                        &
                        <span className="text-violet-400">
                            {" "}Professional Development
                        </span>
                    </h1>

                    <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">
                        Industry certifications validating my expertise in
                        Artificial Intelligence, MERN Stack Development,
                        Open Source, Databases and modern web technologies.
                    </p>

                </motion.div>

            </section >

            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>


            {/* Stats */}
            < section className="mx-auto max-w-[1500px] px-10" >

                <div className="grid gap-8 md:grid-cols-3">

                    <div>
                        <h2 className="text-5xl font-black text-violet-400">
                            9+
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Certificates Earned
                        </p>
                    </div>

                    <div>

                        <h2 className="text-5xl font-black text-violet-400">
                            4
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Learning Platforms
                        </p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-black text-violet-400">
                            2025–2026
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Continuous Learning
                        </p>

                    </div>

                </div>

            </section >

            <div className="mx-auto max-w-[1500px] px-10 py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* certificate heading */}
            <section className="mx-auto max-w-[1500px] px-10 ">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-4xl font-bold">

                        Featured Certifications

                    </h2>

                    <p className="mt-4 text-lg text-gray-400 max-w-3xl">

                        Technical certifications demonstrating continuous learning
                        across Artificial Intelligence, Full Stack Development,
                        Open Source and Software Engineering.

                    </p>

                </motion.div>
            </section >

            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            {/* featured certificates */}
            <section className="mx-auto max-w-[1500px] px-10 pb-32">

                <div className="mt-20 space-y-24">

                    {certificates.map((certificate) => (

                        <motion.article
                            key={certificate.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}

                            className="border-b border-white/10 pb-28 last:border-none"
                        >

                            <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr]">

                                {/* Certificate Image */}

                                <div>

                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="w-full rounded-2xl border border-white/10 shadow-2xl transition duration-300 hover:scale-[1.02]"
                                    />

                                </div>

                                {/* Certificate Details */}

                                <div className="flex h-full flex-col justify-center pr-8">

                                    <p className="uppercase tracking-[0.35em] text-sm font-medium text-violet-400">

                                        {certificate.issuer}

                                    </p>

                                   <h3 className="mt-4 max-w-4xl text-4xl font-black leading-[1.1] text-white">

                                        {certificate.title}

                                    </h3>

                                    <p className="mt-5 text-gray-500">

                                        Issued • {certificate.issued}

                                    </p>

                                   <p className="mt-8 w-full text-xl leading-10 text-gray-400">

                                        {certificate.description}

                                    </p>

                                    {/* Skills */}

                                    <div className="mt-13">

                                        <h4 className="text-xl font-semibold">

                                            Skills Acquired

                                        </h4>

                                        <div className="mt-6 flex max-w-5xl flex-wrap gap-3">

                                            {certificate.skills.map((skill) => (

                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                                                >
                                                    {skill}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                    {/* Credential */}

                                    <div className="mt-8">

                                        <a
                                            href={certificate.credentialUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-3 rounded-full border border-violet-500/30 px-5 py-3 text-base font-medium text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/10 hover:gap-4"
                                        >

                                            <FaExternalLinkAlt />

                                            View Credential

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </section>
            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

        </main>
    )

}

export default Certificate;