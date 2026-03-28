import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-2xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-10">
        <ProjectCard
          src="/autoresearch.png"
          title="AutoResearch AI — Multi-Agent Research Platform"
          description="Production-grade multi-agent system using LangGraph, FastAPI, and SSE that orchestrates 6 AI agents to produce comprehensive, fact-checked research reports."
          link="https://github.com/Adrita12/autoresearch_ai"
        />
        <ProjectCard
          src="/srey.png"
          title="College Tech Fest Website"
          description="The tech fest website of St. Thomas' College and Engineering used for showing events and registering with hidden easter eggs."
          link="https://github.com/Adrita12"
        />
        <ProjectCard
          src="/medvision.png"
          title="MedVision: Intelligent Medication Management"
          description="A medication management system that helps elderly users take the correct medicine at the correct time with smart reminders and tracking."
          link="https://github.com/Adrita12"
        />
      </div>
    </div>
  );
};

export default Projects;