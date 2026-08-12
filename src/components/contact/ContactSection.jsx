import React from 'react';
import { socialsData } from '../../data/socialsData';
import { Button } from '../ui/Button';

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#BDC4D4] bg-[#D2CFCA]/70 p-8 shadow-sm backdrop-blur dark:border-[#52667E] dark:bg-[#0F1A2C]/70">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#52667E] dark:text-[#BDC4D4]">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#1D2E4A] dark:text-[#D2CFCA]">
              Let’s build something sharp, thoughtful, and visually memorable.
            </h2>
            <a href="mailto:hello@example.com" className="mt-4 inline-block text-lg text-[#52667E] underline decoration-[#BDC4D4] underline-offset-4 hover:text-[#1D2E4A] dark:text-[#BDC4D4] dark:decoration-[#52667E] dark:hover:text-[#D2CFCA]">
              hello@example.com
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialsData.map((social) => (
              <Button key={social.label} as="a" href={social.href} target="_blank" rel="noreferrer" variant="secondary">
                {social.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
