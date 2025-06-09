import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 text-white py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#2563EB"/>
            <path d="M10 22V10h2.5V20h7V22h-9.5z" fill="#fff"/>
          </svg>
          <span className="text-2xl font-bold tracking-tight select-none">InsureAI</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#" className="hover:underline underline-offset-2 transition">Home</a>
          <a href="#features" className="hover:underline underline-offset-2 transition">Features</a>
          <a href="#upload" className="hover:underline underline-offset-2 transition">Upload</a>
          <a href="mailto:support@insureai.com" className="hover:underline underline-offset-2 transition">Contact</a>
          <a href="https://github.com/ab007shetty/insureAI" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2 transition">GitHub</a>
        </nav>
        {/* Socials */}
        <div className="flex gap-5">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.724 0-4.932 2.208-4.932 4.932 0 .386.043.762.127 1.124C7.728 8.84 4.1 6.884 1.671 3.899c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.236-.616c-.054 2.114 1.492 4.1 3.722 4.542a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.445 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.539a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.33 3.5 2 4.82 2 6.48c0 1.65 1.33 2.98 2.98 2.98h.02c1.65 0 2.98-1.33 2.98-2.98C7.96 4.82 6.63 3.5 4.98 3.5zm.04 4.65H4.94V6.48c0-.01.01-.01.01-.01h.01c0 .01.01.01.01.01v1.67zM2.4 20.5h5.16V9.55H2.4v10.95zM8.84 20.5h5.16v-5.46c0-1.3.02-2.98-1.81-2.98-1.81 0-2.09 1.41-2.09 2.87v5.57h-5.16v-10.95h4.96v1.5h.07c.69-1.22 2.36-2.5 4.86-2.5 5.2 0 6.17 3.43 6.17 7.89v8.06h-5.16v-7.19c0-1.71-.03-3.91-2.38-3.91-2.38 0-2.75 1.86-2.75 3.78v7.32z"/>
            </svg>
          </a>
          <a href="mailto:support@insureai.com" aria-label="Email" className="hover:text-blue-200 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 12.013 20 4.01V4H4zm16 16V6.414l-7.293 7.293a1 1 0 01-1.414 0L4 6.414V20h16z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-800/40 pt-4 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} InsureAI. All rights reserved.
        <span className="mx-2">&bull;</span>
        <span>
          Designed &amp; built by <a href="https://www.digitranin.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">Digitran Technologies</a>
        </span>
      </div>
    </footer>
  );
}