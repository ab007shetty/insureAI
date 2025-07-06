import React from 'react';
import { Shield } from 'lucide-react';

export default function ProgressTracker({ currentStep, steps, labels, onStepClick, onLogoClick }) {
  const currentIndex = steps.indexOf(currentStep);
  const visibleSteps = steps.slice(1, -1); // Remove 'landing' and 'confirmation' steps

  return (
    <div className="w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          {/* Logo Section */}
          <button
            type="button"
            className="flex items-center space-x-2 focus:outline-none group transition-all duration-300 hover:scale-105"
            onClick={onLogoClick}
            aria-label="Go to Landing Page"
          >
            <div className="relative">
              <Shield className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse group-hover:bg-green-400"></div>
            </div>
            <span className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
              InsureAI
            </span>
            <span className="text-xs bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded-full font-medium group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 shadow-md">
              Home
            </span>
          </button>

          {/* Step Count */}
          <div className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
            Step {Math.max(1, currentIndex)} of {visibleSteps.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2.5 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-700 h-2.5 rounded-full transition-all duration-500 shadow-sm"
              style={{
                width: `${
                  visibleSteps.length > 1
                    ? ((Math.max(currentIndex - 1, 0)) / (visibleSteps.length - 1)) * 100
                    : 0
                }%`
              }}
            />
          </div>
        </div>

        {/* Step Labels - Desktop */}
        <div className="hidden md:flex justify-between text-xs text-gray-600">
          {visibleSteps.map((step, idx) => (
            <span
              key={step}
              className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 ${
                currentStep === step
                  ? 'text-blue-800 font-semibold bg-blue-50 border border-blue-200'
                  : idx < currentIndex
                    ? 'text-blue-600 hover:text-blue-800'
                    : 'text-gray-400 cursor-not-allowed'
              }`}
              onClick={() => idx < currentIndex && onStepClick(step)}
            >
              {labels[step]}
            </span>
          ))}
        </div>

        {/* Mobile Step Indicator */}
        <div className="md:hidden flex justify-center">
          <span className="text-sm text-gray-700 font-medium">
            {labels[currentStep]}
          </span>
        </div>
      </div>
    </div>
  );
}