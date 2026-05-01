import React from 'react';
import { Github, ArrowRight, Linkedin, Rocket, Code2 } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Animated Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 translate-x-1/3 -translate-y-1/4 animate-blob">
        <div className="w-[500px] h-[500px] bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 dark:opacity-20 -translate-x-1/3 translate-y-1/4 animate-blob animation-delay-2000">
        <div className="w-[500px] h-[500px] bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -z-10 opacity-30 dark:opacity-10 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000">
        <div className="w-[600px] h-[600px] bg-pink-300 dark:bg-indigo-900 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-sm font-medium tracking-wide">
                Aspiring Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Ram Parmar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto lg:mx-0">
                Building scalable web apps & digital solutions with modern tech.
              </h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Third-year BCA student passionate about the MERN stack and Python automation.
              Creating seamless user experiences and robust backends.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-8">
              {/* Primary Button */}
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-600 rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95"
              >
                {/* Top highlight for 3D effect */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] pointer-events-none"></div>
                {/* Sweep hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <span className="relative flex items-center drop-shadow-sm tracking-wide">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <div className="flex gap-4 w-full sm:w-auto justify-center">
                {/* LinkedIn Button */}
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-gradient-to-b from-[#0082c6] to-[#0077b5] border border-[#006092] rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(0,119,181,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(0,119,181,0.6)] hover:-translate-y-1 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  <span className="relative flex items-center drop-shadow-sm tracking-wide">
                    <Linkedin className="mr-2 w-4 h-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
                    LinkedIn
                  </span>
                </a>

                {/* GitHub Button */}
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-slate-800 dark:text-white bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-1 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 dark:via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  <span className="relative flex items-center drop-shadow-sm tracking-wide">
                    <Github className="mr-2 w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    GitHub
                  </span>
                </a>
              </div>
            </div>

          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse blur-2xl"></div>
              <img
                src="/images/profile.jpg"
                alt="Ram Parmar"
                draggable="false"
                className="relative w-full h-full object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl z-10 transition-transform hover:scale-105 duration-500 select-none"
              />

              {/* Floating badges with glassmorphism */}
              <div className="absolute top-10 -right-4 lg:-right-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-20 hidden sm:flex items-center gap-3 sm:gap-4 animate-bounce border border-white/50 dark:border-white/10" style={{ animationDuration: '3s' }}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 shadow-inner">
                  <Rocket size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Status</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">Open to Work</p>
                </div>
              </div>

              <div className="absolute bottom-10 -left-4 lg:-left-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-20 hidden sm:flex items-center gap-3 sm:gap-4 animate-bounce border border-white/50 dark:border-white/10" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 shadow-inner">
                  <Code2 size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Stack</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">MERN, PHP & Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;