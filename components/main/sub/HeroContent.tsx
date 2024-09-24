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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
        
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-[#b49bff]">
           Fullstack Developer
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-[#b49bff]">
           AI/ML Enthusiast
          </h1>
        </motion.div> */}
<div className="flex space-x-4">
  <motion.div
    variants={slideInFromTop}
    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
  >
    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    <h1 className="Welcome-text text-[13px] text-[#b49bff]">Fullstack Developer</h1>
  </motion.div>

  <motion.div
    variants={slideInFromTop}
    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
  >
    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    <h1 className="Welcome-text text-[13px] text-[#b49bff]">AI/ML Enthusiast</h1>
  </motion.div>
</div>



        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Software and AI product development. Check out my projects and skills below.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Resume
        </motion.a> */}
        <motion.a
  variants={slideInFromLeft(1)}
  target="_blank"
  href="https://drive.google.com/file/d/1D3wjt7SlmMlfvqd_WwuLtxEe5vhHdvTp/view?usp=sharing"  // Replace this with the actual path to your resume
  download="Your-Resume.pdf"       // This specifies the name of the file to save as
  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
>
  Download Resume
</motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
