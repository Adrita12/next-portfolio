"use client";

import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "./sub/SkillDataProvider";
import SkillText from "./sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 md:pb-60 py-10 md:py-20 px-4 md:px-8"
    >
      <SkillText />

      {/* Frontend */}
      <div className="w-full max-w-[900px] mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-5 text-center">
          Frontend
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Backend & Databases */}
      <div className="w-full max-w-[900px] mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-5 text-center">
          Backend & Databases
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="w-full max-w-[900px] mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5 text-center">
          Tools
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-8 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;