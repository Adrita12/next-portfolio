"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "ML Engineer",
    period: "Feb 2025 — Present",
    location: "Kolkata, India",
    description:
      "Building full-stack agentic AI applications — from data science flows with multi-agent orchestration to Langflow-based content generation, marketing, and compliance agent workflows. Implemented live tracking with Kafka-based queuing and Jupyter client code sandboxing for secure execution.",
    techStack: [
      "Python",
      "LangGraph",
      "Langflow",
      "FastAPI",
      "Google Cloud",
      "LLMs",
      "Kafka",
      "PostgreSQL",
    ],
    current: true,
  },
  {
    company: "Thinking Stack",
    role: "Full Stack Developer (Intern)",
    period: "June 2024 — Jan 2025",
    location: "Kolkata, India",
    description:
      "Developed robust and scalable full-stack applications using Angular and Supabase with PrimeNG and Angular Material for user-friendly enterprise UIs.",
    techStack: [
      "Angular",
      "Supabase",
      "PostgreSQL",
      "Angular Material",
      "PrimeNG",
      "GitLab",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center w-full px-4 md:px-8 py-16 md:py-20"
    >
      {/* Heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-10 md:mb-14"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Career</h1>
        </div>
        <h2 className="text-2xl md:text-[40px] font-semibold text-center text-gray-200">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-[800px] relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={index === 0 ? slideInFromLeft(0.5) : slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative pl-10 md:pl-14 mb-10 last:mb-0"
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-[9px] md:left-[17px] top-1 w-[14px] h-[14px] rounded-full border-2 ${
                exp.current
                  ? "border-purple-500 bg-purple-500 shadow-lg shadow-purple-500/50"
                  : "border-cyan-500 bg-[#0a0118]"
              }`}
            />

            {/* Card */}
            <div className="p-5 md:p-6 rounded-xl border border-[#2A0E61] bg-[#0a0118]/80 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs md:text-sm text-gray-400 flex items-center gap-1">
                    {exp.current && (
                      <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    )}
                    {exp.period}
                  </p>
                  <p className="text-xs text-gray-500">{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-[#7042f861] bg-[#7042f812] text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
