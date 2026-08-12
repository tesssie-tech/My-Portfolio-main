import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-12 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#52667E] dark:text-[#BDC4D4]">
            Frontend Developer and Digital Illustrator
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[#1D2E4A] sm:text-6xl lg:text-7xl dark:text-[#D2CFCA]">
            Modern web experiences with visual storytelling built in.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52667E] dark:text-[#BDC4D4]">
            I design and build responsive interfaces, digital illustrations, and brand systems for clients who need both code precision and art direction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="#work">
              View Work
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#BDC4D4] bg-[#D2CFCA]/75 p-6 shadow-[0_20px_80px_-20px_rgba(29,46,74,0.2)] backdrop-blur dark:border-[#52667E]/40 dark:bg-[#1D2E4A]/72">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(189,196,212,0.72),rgba(82,102,126,0.2))] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-[#BDC4D4]/40 bg-[#D2CFCA]/72 p-5 text-[#1D2E4A] backdrop-blur dark:bg-[#0F1A2C]/68 dark:text-[#D2CFCA]">
              <span className="text-xs uppercase tracking-[0.25em] text-[#52667E] dark:text-[#BDC4D4]">Selected Focus</span>
              <div>
                <p className="text-3xl font-semibold">Web Design</p>
                <p className="mt-2 text-sm leading-6 text-[#52667E] dark:text-[#BDC4D4]">
                  Responsive UI systems, editorial layouts, and polished interactions.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">Illustration</p>
                <p className="mt-2 text-sm leading-6 text-[#52667E] dark:text-[#BDC4D4]">
                  Digital art with strong atmosphere, composition, and story.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">Branding</p>
                <p className="mt-2 text-sm leading-6 text-[#52667E] dark:text-[#BDC4D4]">
                  Identity systems and mockups that feel intentional and premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
