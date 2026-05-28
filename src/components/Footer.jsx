import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center text-xs text-slate-500 font-body bg-slate-50/10 dark:bg-slate-900/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Sandeep Gaire. All rights reserved.</p>
        <p className="text-[10px] text-slate-400">
          Designed with Apple-inspired minimalism and full-stack precision.
        </p>
      </div>
    </footer>
  );
}
