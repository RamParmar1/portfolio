import React from 'react';
import { Mail, Send, Linkedin, Github, Code } from 'lucide-react';
import { EMAIL, LINKEDIN_URL, GITHUB_URL, LEETCODE_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Let's Connect</h2>
            <p className="text-slate-300 text-lg mb-8">
              I'm currently looking for internships and new opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email me at</p>
                <a href={`mailto:${EMAIL}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 mt-8">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-black transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#ffa116] transition-colors group"
                  aria-label="LeetCode"
                >
                  <Code className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              {/* Replace with your Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="04bc9e87-daad-4281-8638-9247eca83b7a" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;