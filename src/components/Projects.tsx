import React from 'react';
import { ExternalLink, Github, MonitorSmartphone } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-32 bg-gray-50 dark:bg-[#020617] transition-colors duration-500 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-[300px] md:h-[500px] pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full md:w-3/4 h-full bg-gradient-to-b from-blue-400/20 to-transparent blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-semibold text-xs md:text-sm tracking-wide uppercase shadow-sm ring-1 ring-blue-500/20">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 tracking-tight mb-4 pb-2">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Exploring the intersection of design and engineering through modern, highly-performant web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <article 
              key={project.id} 
              className="relative w-full rounded-[1.5rem] overflow-hidden p-[1px] group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none flex"
            >
              {/* Static Border (visible when not hovered) */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 transition-colors duration-500 group-hover:bg-transparent" />
              
              {/* Rotating Magic Border (visible on hover) */}
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#3b82f6_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#60a5fa_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner Card Body */}
              <div className="relative z-10 flex flex-col w-full h-full bg-white dark:bg-[#0a0f1c] rounded-[calc(1.5rem-1px)] p-5 sm:p-8 transition-colors duration-500 overflow-hidden">
                
                {/* Subtle Dot Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.1]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', 
                    backgroundSize: '20px 20px',
                    color: 'inherit'
                  }}
                />

                {/* Content Container (z-index above background pattern) */}
                <div className="relative z-20 flex-1 flex flex-col h-full">
                  
                  {/* Top Bar: Icon & Actions */}
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-slate-800 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <MonitorSmartphone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700/50 hover:scale-110"
                        aria-label="Source Code"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all border border-transparent dark:border-blue-500/10 hover:scale-110"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 sm:pt-5 border-t border-gray-100 dark:border-slate-800/50 mt-auto">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, i) => (
                        <div 
                          key={i} 
                          className="flex items-center px-2 sm:px-2.5 py-1 rounded-md bg-gray-50 dark:bg-[#131b2f] text-slate-700 dark:text-slate-300 text-[10px] sm:text-xs font-medium border border-gray-200 dark:border-slate-800 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors duration-300"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500 mr-1.5 sm:mr-2 opacity-70"></span>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;