import React from 'react';
import { Badge } from '../ui/Badge';

export function PortfolioCard({ project, onOpen, projectImageMap }) {
  const coverImageSrc = project.coverImageKey
    ? projectImageMap[project.coverImageKey] // Use the passed projectImageMap
    : '/imgs/Mo -draws.png';

  return (
    <article className="group flex h-full flex-col overflow-hidden border-[3px] border-black bg-[#f4f4f0] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:-translate-x-1">
      <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-black bg-[#FF77BC]">
        <img
          src={coverImageSrc}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 border-2 border-black bg-[#A3E635] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {project.category}
        </div>
        {project.featured ? (
          <div className="absolute bottom-3 right-3 border-2 border-black bg-[#7C3AED] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Featured
          </div> 
        ) : null}
      </div>
      <div className="flex flex-grow flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="font-mono text-2xl font-black uppercase leading-tight tracking-tight text-black">
            {project.title}
          </h3>
          <p className="font-mono text-sm leading-6 text-black/80">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="border-2 border-black bg-white px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-black">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto border-2 border-black bg-[#D2CFCA] p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-black">
            Case study available
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full border-t-[3px] border-black bg-[#A3E635] py-3 text-center font-mono text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#C6F66F] active:translate-x-1 active:translate-y-1"
      >
        VIEW MORE
      </button>
    </article>
  );
}
