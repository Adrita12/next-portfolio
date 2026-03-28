import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const content = (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#0a0118] group transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/25 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative p-4 md:p-5">
        <h1 className="text-base md:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
          {title}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {link && (
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
        {content}
      </a>
    );
  }

  return <div className="flex-1 min-w-0">{content}</div>;
};

export default ProjectCard;