import React from 'react';

export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#BDC4D4] bg-[#D2CFCA]/85 px-3 py-1 text-xs font-medium text-[#52667E] shadow-sm backdrop-blur dark:border-[#52667E]/40 dark:bg-[#1D2E4A]/72 dark:text-[#BDC4D4] ${className}`}
    >
      {children}
    </span>
  );
}
