import React from 'react';

export function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#52667E] focus:ring-offset-2 focus:ring-offset-[#D2CFCA]';
  const styles = {
    primary: 'bg-[#1D2E4A] text-[#D2CFCA] hover:bg-[#0F1A2C] dark:bg-[#D2CFCA] dark:text-[#1D2E4A] dark:hover:bg-[#BDC4D4]',
    secondary:
      'border border-[#BDC4D4] bg-[#D2CFCA]/70 text-[#1D2E4A] backdrop-blur hover:bg-[#D2CFCA] dark:border-[#52667E] dark:bg-[#0F1A2C]/70 dark:text-[#D2CFCA] dark:hover:bg-[#1D2E4A]',
  };

  return <Component className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
