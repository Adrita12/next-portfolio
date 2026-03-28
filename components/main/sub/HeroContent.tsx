"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I am{" "}
            </span>
            Adrita Bhattacharjee
          </span>
        </motion.div>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[11px] sm:text-[13px] text-[#b49bff]">Full Stack Developer</h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[11px] sm:text-[13px] text-[#b49bff]">AI/Backend Engineer</h1>
          </motion.div>
        </div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer building agentic AI systems
          with LangGraph, CrewAI & Google ADK, and scalable backends with
          Kafka, caching & event-driven architectures.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          target="_blank"
          href="https://drive.google.com/file/d/1ZGvXWS7G0oSDNjXO3xj7D7oqcnwlGcPo/view?usp=sharing"
          download="Your-Resume.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Resume
        </motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-[280px] sm:w-[400px] md:w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
