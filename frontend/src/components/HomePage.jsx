import React, { useState } from 'react';
import FileUpload from './FileUpload';
import InsightsDashboard from './InsightsDashboard';
import Footer from "./Footer";

function Logo() {
  // Replace this SVG with your real logo if you have one
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="inline mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#2563EB"/>
      <path d="M10 22V10h2.5V20h7V22h-9.5z" fill="#fff"/>
    </svg>
  );
}

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Upload", href: "#upload" }
];

export default function HomePage() {
  const [analysis, setAnalysis] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full border-b border-gray-100 shadow-sm bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <span className="text-xl font-bold text-blue-800 tracking-tight select-none">InsureAI</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium px-3 py-2 rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center p-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-7 h-7 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        {/* Mobile Sidebar Drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm flex">
            <div className="w-64 bg-white shadow-xl h-full flex flex-col p-6">
              <div className="flex items-center mb-8">
                <Logo />
                <span className="text-lg font-bold text-blue-800">InsureAI</span>
                <button
                  className="ml-auto text-gray-400 hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-700 text-base font-medium py-2"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex-1" onClick={() => setSidebarOpen(false)} />
          </div>
        )}
      </nav>

      {/* HERO + UPLOAD */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center py-12 md:py-0 px-4 md:px-10 gap-12 bg-white">
        {/* Hero/CTA */}
        <section className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
            Unlock Insurance Insights with <span className="text-blue-700">AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Upload your insurance claims data and get instant, AI-powered analytics: spot trends, detect risks and fraud, and make smarter decisions in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#upload"
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-lg font-semibold shadow transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="text-blue-700 hover:underline text-lg px-3 py-3 font-medium"
            >
              See Features
            </a>
          </div>
        </section>
        {/* Upload Form */}
        <section
          id="upload"
          className="flex-1 w-full max-w-lg bg-white border border-gray-100 shadow-md rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Upload Claims Data</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Securely upload your CSV file to view analytics. No sign-up needed.
          </p>
          <FileUpload onAnalysis={setAnalysis} />
        </section>
      </main>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="w-full bg-gray-50 border-t border-b border-gray-100 py-12 px-4 md:px-0"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard icon="⚡" title="Instant Results" desc="Upload & get insights in seconds." />
          <FeatureCard icon="🔒" title="Data Privacy" desc="Your data is never stored." />
          <FeatureCard icon="🎯" title="Fraud Detection" desc="AI spots risks and anomalies." />
          <FeatureCard icon="📈" title="Actionable Analytics" desc="Clear graphs and recommendations." />
        </div>
      </section>

      {/* DASHBOARD */}
      {analysis && (
        <section className="flex-1 bg-white w-full flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-5xl">
            <InsightsDashboard analysis={analysis} />
          </div>
        </section>
      )}
	  <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center">
      <span className="text-3xl mb-2">{icon}</span>
      <div className="text-blue-900 font-bold text-lg mb-1">{title}</div>
      <div className="text-gray-600 text-base text-center">{desc}</div>
    </div>
  );
}