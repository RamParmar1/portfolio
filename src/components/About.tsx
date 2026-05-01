import React from 'react';
import { User, Code2, Database, GraduationCap, Bot } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-[#030712] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-slate-200 dark:border-slate-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
                About Me
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Bridging logic with <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  creative design.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I’m a 3rd-year <strong className="text-slate-900 dark:text-white font-semibold">BCA student (6th semester)</strong> with a deep passion for building robust digital experiences. My journey involves crafting comprehensive Travel Management Systems using both <strong className="text-blue-600 dark:text-blue-400 font-medium">PHP/MySQL</strong> and the modern <strong className="text-blue-600 dark:text-blue-400 font-medium">MERN stack</strong>.
              </p>
              <p>
                Beyond standard web development, I have a strong knack for automation. I frequently build intelligent agents using <strong className="text-slate-900 dark:text-white font-semibold">n8n + LangChain</strong> and actively contribute Python automation projects to the open-source community.
              </p>
              <p>
                When I'm not pushing code to GitHub, you can find me sharpening my problem-solving skills in <strong className="text-slate-900 dark:text-white font-semibold">Data Structures & Algorithms (DSA)</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Bento Box Widgets */}
          <div className="lg:col-span-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Large Widget (Spans 2 columns on small, but normal on mobile) */}
              <div className="sm:col-span-2 relative group bg-white/40 dark:bg-[#0B1120]/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-6 sm:p-8 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 flex justify-between items-start mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 text-blue-600 dark:text-blue-400 rounded-[1rem] flex items-center justify-center border border-blue-200 dark:border-slate-700 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/20 transition-all duration-500">
                    <Code2 className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="relative z-10 text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-300 transition-all duration-300">Full Stack Architecture</h3>
                <p className="relative z-10 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  Building scalable, end-to-end applications with modern frameworks. Specializing in React, Node.js, and creating seamless APIs.
                </p>
              </div>

              {/* Small Widget 1 */}
              <div className="relative group bg-white/40 dark:bg-[#0B1120]/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-6 sm:p-8 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-purple-900/20 hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 -mb-4 -mr-4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-slate-800 dark:to-slate-900 text-purple-600 dark:text-purple-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-purple-200 dark:border-slate-700 shadow-sm group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-purple-500/20 transition-all duration-500">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Constant Learner</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    Pursuing BCA, deeply exploring new tech, and mastering DSA.
                  </p>
                </div>
              </div>

              {/* Small Widget 2 */}
              <div className="relative group bg-white/40 dark:bg-[#0B1120]/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-6 sm:p-8 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-green-900/20 hover:border-green-500/30 dark:hover:border-green-400/30 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 sm:w-24 sm:h-24 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 w-10 h-10 sm:w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 dark:from-slate-800 dark:to-slate-900 text-green-600 dark:text-green-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-green-200 dark:border-slate-700 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-green-500/20 transition-all duration-500">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Backend & AI</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    Solid grasp of automation, Python scripts, and AI integrations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;