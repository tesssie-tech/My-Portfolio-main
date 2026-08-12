import React from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar({ isDark, onToggleTheme }) {
  const links = [
    ['Work', '#work'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#BDC4D4]/70 bg-[#D2CFCA]/75 backdrop-blur-xl dark:border-[#52667E]/40 dark:bg-[#1D2E4A]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D2E4A] dark:text-[#D2CFCA]">
          Portfolio
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-[#52667E] transition hover:text-[#1D2E4A] dark:text-[#BDC4D4] dark:hover:text-[#D2CFCA]">
              {label}
            </a>
          ))}
        </nav>
        <Button variant="secondary" className="gap-2 px-4 py-2 text-xs" onClick={onToggleTheme} type="button">
          {isDark ? <SunMedium size={14} /> : <MoonStar size={14} />}
          {isDark ? 'Light' : 'Dark'}
        </Button>
      </div>
    </header>
  );
}
