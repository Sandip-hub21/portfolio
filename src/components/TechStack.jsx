import React from 'react';
import { Layers, Terminal, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "React", description: "Hooks, Router, Custom State" },
        { name: "JavaScript (ES6+)", description: "Async/Await, DOM, Arrays" },
        { name: "Tailwind CSS", description: "Utility-first grid, animation" },
        { name: "HTML5 & CSS3", description: "Variables, Semantic Layout" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "Flask", description: "Python APIs, CORS, Auth" },
        { name: "ASP.NET Core MVC", description: "C#, Controllers, ViewModels" },
        { name: "Python", description: "NLP modules, NumPy, Pandas" },
        { name: "C#", description: "LINQ, Types, EF Core" }
      ]
    },
    {
      title: "Database Engines",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "MySQL", description: "Index tuning, Transactions" },
        { name: "Microsoft SQL Server", description: "SSMS, Queries, T-SQL" },
        { name: "SQL", description: "Joins, Aggregations, Window Funcs" },
        { name: "Entity Framework", description: "ORM, Migrations, Linq-to-Entities" }
      ]
    },
    {
      title: "Tools & Environment",
      icon: <Wrench className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "Git & GitHub", description: "PR workflows, Actions, commits" },
        { name: "VS Code / Visual Studio", description: "IDE configurations, debuggers" },
        { name: "Postman", description: "API contract testing, environment vars" },
        { name: "XAMPP", description: "Local database stack, PHPMyAdmin" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Toolbox
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-4">
            Technical Skill Taxonomy
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-body">
            Categorized overview of languages, frameworks, databases, and environments I use to build real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  {cat.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4 flex-grow">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <h5 className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h5>
                    <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
