"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const expertiseAreas = [
  {
    icon: "🤖",
    title: "Agentic AI Systems",
    description:
      "Multi-agent pipelines with LangGraph, CrewAI & Google ADK — from content generation to marketing to compliance workflows using Langflow.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: "⚡",
    title: "Full Stack Applications",
    description:
      "End-to-end web apps with Next.js, React & Angular on the frontend, and Node.js, Express & FastAPI powering the backend with real-time SSE streaming.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: "🧪",
    title: "Data & Execution Pipelines",
    description:
      "Data science flows with live tracking, Kafka-based queuing, Jupyter client code sandboxing, and secure execution environments for AI workloads.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-[50vh] md:min-h-[70vh] w-full h-full px-4 md:px-8 py-16 md:py-20">
      {/* Heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12 md:mb-16 z-[20]"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">What I Build</h1>
        </div>
        <h2 className="text-2xl md:text-[40px] font-semibold text-center text-gray-200 leading-tight">
          Turning Ideas into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Intelligent Systems
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-6 w-full max-w-[1000px] z-[20]">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            variants={index === 0 ? slideInFromLeft(0.5) : index === 2 ? slideInFromRight(0.5) : slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 group"
          >
            <div className="h-full p-5 md:p-6 rounded-xl border border-[#2A0E61] bg-[#0a0118]/80 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
              {/* Icon */}
              <div className="text-3xl mb-3">{area.icon}</div>

              {/* Title */}
              <h3
                className={`text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${area.gradient} mb-2`}
              >
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background video */}
      <div className="w-full flex items-start justify-center absolute opacity-40">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;