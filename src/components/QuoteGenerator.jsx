import React, { useState } from 'react';
import { DollarSign, ArrowLeft, ArrowRight, Zap, Award } from 'lucide-react';

const demoQuotes = [
  {
    id: 1,
    company: "SafeHome Insurance",
    price: 1050,
    coverage: "Standard",
    highlights: ["Low Deductible", "Fast Claims", "Flood Coverage Included"],
    best: false,
  },
  {
    id: 2,
    company: "AI Protect",
    price: 890,
    coverage: "AI Enhanced",
    highlights: ["Smart Discounts", "Earthquake Protection", "24/7 Support"],
    best: true,
  },
  {
    id: 3,
    company: "ValueGuard",
    price: 970,
    coverage: "Value Plus",
    highlights: ["Affordable", "Flexible Payments", "Loyalty Rewards"],
    best: false,
  },
];

export default function QuoteGenerator({ applicationData, onComplete, onBack }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => setSelected(id);

  const handleContinue = () => {
    if (selected) onComplete(demoQuotes.find(q => q.id === selected));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <DollarSign className="h-10 w-10 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Generated Quotes</h2>
          </div>
          <p className="text-gray-600 mb-6">Select the quote that fits your needs and budget.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {demoQuotes.map(q => (
              <div
                key={q.id}
                className={`rounded-lg p-5 border-2 cursor-pointer relative transition-all ${
                  selected === q.id
                    ? "border-blue-600 bg-blue-50 shadow-xl"
                    : q.best
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => handleSelect(q.id)}
              >
                {q.best && (
                  <div className="absolute top-2 right-2 flex items-center text-green-700 font-bold text-xs">
                    <Award className="h-4 w-4 mr-1" /> Best Value
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{q.company}</h3>
                <div className="font-bold text-2xl mb-2">${q.price}/yr</div>
                <div className="mb-2 text-blue-700">{q.coverage}</div>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
                  {q.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="flex items-center">
                  {selected === q.id && (
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold mt-2">
                      Selected
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleContinue}
              disabled={!selected}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}