import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ram Parmar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;