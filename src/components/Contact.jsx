import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';

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

const LinkedinIcon = (props) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setLoading(true);
    // Simulate API pipeline call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50 relative bg-slate-50/20 dark:bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Connect
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-4">
            Contact Information
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-body">
            Feel free to reach out directly through my social handles or drop a message via the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Contact Links */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">
              Direct Channels
            </h4>
            
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:sandeepgaire260@.com"
                className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-2xl hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider">Email</h5>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                      sandeepgaire260@.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-2xl hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider">LinkedIn</h5>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/sandeep-gaire
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-2xl hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider">GitHub</h5>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    github.com/sandeep-gaire
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f16] rounded-3xl shadow-sm">
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">
                Send a Message
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-display">
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-display">
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-msg" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-display">
                    Message
                  </label>
                  <textarea
                    id="form-msg"
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Your project details or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    submitted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90'
                  }`}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-slate-400 border-t-indigo-600 rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
