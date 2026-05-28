import React from 'react';
import { Cpu, Server, Layout, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const directions = [
    {
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      title: "Full Stack Development",
      desc: "Architecting end-to-end applications with robust business logic, robust APIs, and performant state synchronization."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "AI-Integrated Systems",
      desc: "Fusing predictive layers, text embeddings, and intelligent similarity heuristics directly into core backend microservices."
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      title: "Recommendation Engines",
      desc: "Designing and implementing mathematical vector models to pair users with target roles based on contextual criteria."
    },
    {
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      title: "Modern UI/UX Design",
      desc: "Creating minimal, fast, and structured layouts inspired by sleek industrial design to optimize customer workflows."
    },
    {
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      title: "Real-World Business Systems",
      desc: "Engineering admin platforms and inventory management with strict authentication, transaction boundaries, and auditing."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Headline & Focus */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Technical Focus
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-6">
              About My Engineering Goals
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body mb-6">
              I am a developer who believes software is a craft defined by technical execution, clean layout, and concrete, verifiable solutions. I steer clear of speculative buzzwords and focus on engineering clean systems that solve practical challenges.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">
              Whether optimizing relational query performance, writing secure auth pipelines in C#, or implementing machine learning calculations in Python, I aim to provide transparent code and architectural clarity.
            </p>
          </div>

          {/* Core Areas Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {directions.map((dir, idx) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 glow-card"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4">
                  {dir.icon}
                </div>
                <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">
                  {dir.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-body">
                  {dir.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
