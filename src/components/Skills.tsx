import React from 'react';
import { SKILLS, LEETCODE_URL } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Decorative background element */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
             A diverse stack of languages and tools I use to build seamless applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="relative p-[1px] group rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex"
            >
              {/* Static Border */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-slate-800 transition-colors duration-500 group-hover:bg-transparent" />
              
              {/* Rotating Magic Border */}
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#3b82f6_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#60a5fa_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Inner Card Body */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full p-6 bg-white dark:bg-[#0a0f1c] rounded-[calc(1.5rem-1px)] transition-colors duration-500">
                <div className="h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                  <i className={`${skill.iconClass} text-5xl`}></i>
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
          
          {/* DSA / LeetCode Card */}
          <a 
            href={LEETCODE_URL}
            target="_blank"
            rel="noreferrer"
            className="relative p-[1px] group rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex"
          >
            {/* Static Border */}
            <div className="absolute inset-0 bg-gray-100 dark:bg-slate-800 transition-colors duration-500 group-hover:bg-transparent" />
            
            {/* Rotating Magic Border */}
            <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#3b82f6_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#60a5fa_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Card Body */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full p-6 bg-white dark:bg-[#0a0f1c] rounded-[calc(1.5rem-1px)] transition-colors duration-500">
              <div className="h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <span className="text-4xl font-bold font-mono text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{'<DSA/>'}</span>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                Problem Solving
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;