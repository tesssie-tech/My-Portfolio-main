import React from 'react';

export function PortfolioFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active
                ? 'border-[#1D2E4A] bg-[#1D2E4A] text-[#D2CFCA] dark:border-[#D2CFCA] dark:bg-[#D2CFCA] dark:text-[#1D2E4A]'
                : 'border-[#BDC4D4] bg-[#D2CFCA]/70 text-[#52667E] hover:border-[#52667E] hover:text-[#1D2E4A] dark:border-[#52667E] dark:bg-[#0F1A2C]/70 dark:text-[#BDC4D4] dark:hover:text-[#D2CFCA]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
 