import React from 'react';
import { GitPullRequest, GitFork, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GitIcon = (props) => (
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


export default function Github() {
  // Generate mock grid contribution counts: 52 weeks, 7 days
  // Let's create a visual mapping of green shades
  const weeks = 53;
  const days = 7;
  const contributions = [];

  // Seed standard random shades of green to mimic actual commits
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // Create some patterns (more commits on weekdays, empty spots on weekends)
      const isWeekend = d === 0 || d === 6;
      let level = 0;
      const rand = Math.random();
      
      if (isWeekend) {
        level = rand > 0.8 ? (rand > 0.95 ? 2 : 1) : 0;
      } else {
        level = rand > 0.2 ? (rand > 0.8 ? (rand > 0.93 ? 4 : 3) : 2) : 1;
      }
      week.push(level);
    }
    contributions.push(week);
  }

  const getLevelClass = (level) => {
    switch (level) {
      case 1: return 'bg-emerald-100 dark:bg-emerald-950/40';
      case 2: return 'bg-emerald-300 dark:bg-emerald-800/60';
      case 3: return 'bg-emerald-500 dark:bg-emerald-600/80';
      case 4: return 'bg-emerald-700 dark:bg-emerald-400';
      default: return 'bg-slate-100 dark:bg-slate-900';
    }
  };

  const mockRepos = [
    {
      name: "job-recommendation-engine",
      desc: "ML powered job similarity calculations matching resume profiles to positions via TF-IDF vectorization and custom cosine metrics. Integrated with a Flask REST controller.",
      stars: 12,
      forks: 4,
      language: "Python",
      langColor: "bg-blue-500"
    },
    {
      name: "secure-admin-portal",
      desc: "ASP.NET Core administrative management application with claims authentication, CSRF validation, parameter-safe DB access via EF Core, and table change logs.",
      stars: 8,
      forks: 2,
      language: "C#",
      langColor: "bg-violet-600"
    },
    {
      name: "operations-kitchen-display",
      desc: "React dashboard interface displaying ordering speeds, meal state pipelines, and inventory drawdowns. Connected via state queries to a relational relational schema.",
      stars: 14,
      forks: 3,
      language: "JavaScript",
      langColor: "bg-amber-400"
    }
  ];

  return (
    <section id="github" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Verifiable Proof
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-4">
            GitHub Commit Activity
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-body">
            I don't just talk about engineering; I push clean commits. Here is an index of my codebase history and repository designs.
          </p>
        </div>

        {/* Contribution Graph Card */}
        <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-3xl mb-8 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2.5">
              <GitIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              <span className="font-mono text-xs font-bold text-slate-850 dark:text-slate-200">
                github.com/sandeep-gaire
              </span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Open Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid Grid container */}
          <div className="overflow-x-auto pb-4 scrollbar-none">
            <div className="flex gap-[3px] min-w-[700px] justify-center">
              {contributions.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-[9px] h-[9px] rounded-[1.5px] transition-colors duration-300 hover:scale-110 ${getLevelClass(level)}`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 max-w-[700px] mx-auto">
            <span>Learn more about my contribution habits</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[1px] bg-slate-100 dark:bg-slate-900" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-100 dark:bg-emerald-950/40" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-300 dark:bg-emerald-800/60" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500 dark:bg-emerald-600/80" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-700 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 rounded-2xl flex flex-col justify-between hover:border-slate-350 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-slate-800 dark:text-white mb-3">
                  <span className="font-display font-bold text-sm tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                    {repo.name}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-body">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mt-auto">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-slate-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
