import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Network, Database, Code, ShieldAlert, Award, ArrowUpRight, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);
  const [activeSubTab, setActiveSubTab] = useState('overview'); // overview, architecture, database, code, challenges

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);

  const subTabs = [
    { id: 'overview', name: 'Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'architecture', name: 'System Architecture', icon: <Network className="w-4 h-4" /> },
    { id: 'database', name: 'Database Schema', icon: <Database className="w-4 h-4" /> },
    { id: 'code', name: 'Technical Deep Dive', icon: <Code className="w-4 h-4" /> },
    { id: 'challenges', name: 'Challenges & Resolutions', icon: <ShieldAlert className="w-4 h-4" /> },
  ];

  return (
    <section id="projects" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Case Studies
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-4">
            Production-Grade Projects
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-body">
            Deep-dive explorations into the architecture, logic, schemas, and challenges of systems built to solve real-world problems.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProjectId(project.id);
                setActiveSubTab('overview');
              }}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedProjectId === project.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{project.title}</span>
            </button>
          ))}
        </div>

        {/* Project Case Study Box */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-3xl overflow-hidden shadow-sm">
          {/* Header Banner */}
          <div className="p-8 border-b border-slate-200/60 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-[10px] md:text-xs font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/30">
                {selectedProject.tag}
              </span>
              <h4 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white mt-3">
                {selectedProject.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 max-w-xs md:justify-end">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-tab Navigation */}
          <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10 px-4 flex gap-1 overflow-x-auto scrollbar-none">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeSubTab === tab.id
                    ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedProjectId}-${activeSubTab}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* 1. OVERVIEW */}
                {activeSubTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Summary */}
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-body text-base">
                      {selectedProject.summary}
                    </p>

                    {/* Problem vs Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-rose-50/20 dark:bg-rose-950/5 border border-rose-100 dark:border-rose-900/20">
                        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-3">
                          <AlertTriangle className="w-5 h-5" />
                          <h5 className="font-display font-bold text-sm">The Problem</h5>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-100 dark:border-emerald-900/20">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-3">
                          <CheckCircle2 className="w-5 h-5" />
                          <h5 className="font-display font-bold text-sm">The Solution</h5>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-4">
                        Core System Features
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 2. ARCHITECTURE FLOW */}
                {activeSubTab === 'architecture' && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-body leading-relaxed">
                      Below is the architectural schematic showing structural boundaries and step-by-step data processing.
                    </p>

                    {/* Diagram Block */}
                    <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 flex flex-wrap gap-4 justify-center items-center">
                      {selectedProject.architecture.nodes.map((node, index) => (
                        <React.Fragment key={node.id}>
                          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 max-w-[200px] text-center shadow-sm">
                            <span className="text-[10px] font-mono text-indigo-500 dark:text-indigo-400 font-bold block mb-1">
                              NODE {node.id}
                            </span>
                            <h6 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                              {node.label}
                            </h6>
                            <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                              {node.description}
                            </p>
                          </div>
                          {index < selectedProject.architecture.nodes.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-700 hidden lg:block" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Flow Steps */}
                    <div>
                      <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-4">
                        Step-by-Step Operations
                      </h5>
                      <div className="space-y-3">
                        {selectedProject.architecture.flow.map((step, idx) => (
                          <div key={idx} className="p-3.5 border border-slate-100 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-900/10 rounded-xl flex items-start gap-3">
                            <span className="text-xs font-mono font-bold bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400 shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DATABASE SCHEMA */}
                {activeSubTab === 'database' && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-body leading-relaxed">
                      Structured relational tables capturing critical variables for transactional integrity.
                    </p>

                    <div className="space-y-6">
                      {selectedProject.databaseSchema.map((tbl) => (
                        <div key={tbl.table} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-950">
                          {/* Table Header */}
                          <div className="bg-slate-50 dark:bg-slate-900 px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                              Table: {tbl.table}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              Relational Table
                            </span>
                          </div>

                          {/* Columns Grid */}
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs md:text-sm">
                              <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-900 bg-slate-50/30 dark:bg-slate-900/10">
                                  <th className="p-3 font-semibold text-slate-500">Column Name</th>
                                  <th className="p-3 font-semibold text-slate-500">Data Type</th>
                                  <th className="p-3 font-semibold text-slate-500">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tbl.columns.map((col) => (
                                  <tr key={col.name} className="border-b border-slate-100 dark:border-slate-900/30 hover:bg-slate-50/30 dark:hover:bg-slate-900/5 transition-colors">
                                    <td className="p-3 font-mono font-semibold text-indigo-600 dark:text-indigo-400">{col.name}</td>
                                    <td className="p-3 font-mono text-slate-500">{col.type}</td>
                                    <td className="p-3 text-slate-600 dark:text-slate-400 font-body">{col.desc}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. CODE DEEP DIVE */}
                {activeSubTab === 'code' && (
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {selectedProject.technicalDeepDive.title}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-body leading-relaxed">
                        {selectedProject.technicalDeepDive.description}
                      </p>
                    </div>

                    {/* Pre / Code block with simulated IDE wrapper */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-[#0c0f16]">
                      {/* Editor Top Bar */}
                      <div className="bg-[#06080b] px-4 py-2 flex items-center justify-between border-b border-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 select-none">
                          {selectedProject.id === 'admin-system' ? 'CustomerController.cs' : 'recommender.py'}
                        </span>
                      </div>
                      <div className="overflow-x-auto p-4 text-[11px] md:text-xs font-mono text-slate-300 leading-normal max-h-[350px] overflow-y-auto bg-slate-950">
                        <pre className="text-left whitespace-pre">{selectedProject.technicalDeepDive.code}</pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. CHALLENGES */}
                {activeSubTab === 'challenges' && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-body leading-relaxed">
                      Every production-level system presents real problems. Here are technical hurdles encountered and resolved.
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                      {selectedProject.challenges.map((c, i) => (
                        <div key={i} className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 flex flex-col md:flex-row gap-6 shadow-sm">
                          <div className="md:w-1/2">
                            <div className="flex items-center gap-2 text-rose-500 mb-2">
                              <AlertTriangle className="w-4 h-4" />
                              <h5 className="font-display font-bold text-xs uppercase tracking-wider">Hurdle & Diagnostic</h5>
                            </div>
                            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-350 leading-relaxed font-body">
                              {c.problem}
                            </p>
                          </div>
                          <div className="w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
                          <div className="md:w-1/2">
                            <div className="flex items-center gap-2 text-indigo-500 mb-2">
                              <Award className="w-4 h-4" />
                              <h5 className="font-display font-bold text-xs uppercase tracking-wider">Engineering Resolution</h5>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                              {c.solution}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Future Scope */}
                    <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-indigo-50/10 dark:bg-indigo-950/5">
                      <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-3">
                        Future Scalability & Heuristics
                      </h5>
                      <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        {selectedProject.futureScope.map((scope, index) => (
                          <li key={index} className="flex items-start gap-2.5">
                            <ArrowUpRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
