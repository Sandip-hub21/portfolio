import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Premium Background Mesh / Floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-indigo-400/5 dark:bg-indigo-500/5 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-400/5 dark:bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Subtle Pill Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-xs font-semibold text-slate-600 dark:text-slate-400 mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Large Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white"
        >
          Sandip Gaire
        </motion.h1>

        {/* Technical Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold font-display text-indigo-600 dark:text-indigo-400 mb-6 tracking-wide"
        >
          Full Stack Developer <span className="text-slate-300 dark:text-slate-700">|</span> React, Flask, MySQL <span className="text-slate-300 dark:text-slate-700">|</span> AI & Recommendation Systems
        </motion.h2>

        {/* Value statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          I build intelligent web applications focused on real-world problem solving, recommendation systems, and scalable full-stack development.
        </motion.p>

        {/* Call to actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-slate-900/10 dark:shadow-white/5"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#github"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors shadow-sm"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-slate-600 dark:text-slate-400 font-semibold text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
