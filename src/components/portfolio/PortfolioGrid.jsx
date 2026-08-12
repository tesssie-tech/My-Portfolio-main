import React from 'react';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioGrid({ projects, onOpen, projectImageMap }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} onOpen={onOpen} projectImageMap={projectImageMap} />
      ))}
    </div>
  );
}
