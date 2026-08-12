import React from 'react';
import { Badge } from '../ui/Badge';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Creative',
    items: ['Digital Painting', 'Brand Identity', 'Typography', 'Mockups'],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Illustrator', 'Photoshop', 'Canva', 'Inkscape'],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#52667E] dark:text-[#BDC4D4]">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1D2E4A] dark:text-[#D2CFCA]">
            I build interfaces that feel as considered as the visuals they support.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-[#52667E] dark:text-[#BDC4D4]">
          <p>
            I work across frontend development, illustration, and brand design to create polished experiences that are both functional and expressive.
          </p>
          <p>
            My process combines design systems, editorial layouts, and visual storytelling so the final product feels cohesive across web, art, and identity work.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-[#BDC4D4] bg-[#D2CFCA]/70 p-4 dark:border-[#52667E] dark:bg-[#0F1A2C]/70">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#52667E] dark:text-[#BDC4D4]">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
