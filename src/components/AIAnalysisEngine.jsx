import React, { useState } from 'react';
import { BarChart3, AlertCircle, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export default function AIAnalysisEngine({ applicationData, onComplete, onBack }) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulate AI analysis
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        risk: 'Low',
        notes: [
          "Property is in a low-risk flood zone.",
          "Roof recently replaced (less than 5 years old).",
          "Proximity to fire station: Good.",
        ],
        flags: [
          "No recent insurance claims found.",
          "No major renovations flagged."
        ]
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">AI Risk Analysis</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our AI analyzes your property and neighborhood to determine risk and highlight important notes.
          </p>

          {loading && (
            <div className="py-10 flex flex-col items-center">
              <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
              <div className="text-blue-700">Analyzing data, please wait...</div>
            </div>
          )}
          {!loading && analysis && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-blue-50 rounded-lg p-4 mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-lg font-semibold text-blue-800">Risk Level: <span className="font-bold">{analysis.risk}</span></span>
                </div>
                <ul className="list-disc pl-6 text-blue-900 mt-4">
                  {analysis.notes.map((note, i) => (
                    <li key={i} className="mb-1">{note}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mr-2" />
                  <span className="text-lg font-semibold text-yellow-800">AI Flags</span>
                </div>
                <ul className="list-disc pl-6 text-yellow-900 mt-4">
                  {analysis.flags.map((flag, i) => (
                    <li key={i} className="mb-1">{flag}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              onClick={onComplete}
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
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