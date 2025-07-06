import React, { useState } from 'react';
import { TrendingUp, ArrowLeft, ArrowRight, Check, DollarSign } from 'lucide-react';

const demoPolicies = [
  {
    id: 1,
    company: "SafeHome Insurance",
    price: 1050,
    dwelling: 300000,
    deductible: 1000,
    personalProperty: 75000,
    flood: true,
  },
  {
    id: 2,
    company: "AI Protect",
    price: 890,
    dwelling: 310000,
    deductible: 1250,
    personalProperty: 70000,
    flood: false,
  },
  {
    id: 3,
    company: "ValueGuard",
    price: 970,
    dwelling: 295000,
    deductible: 1000,
    personalProperty: 80000,
    flood: false,
  },
];

export default function PolicyComparison({ applicationData, onSelectQuote, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-10 w-10 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Compare Policies</h2>
          </div>
          <p className="text-gray-600 mb-6">Compare coverage and choose the best policy for your needs.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg bg-white shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2 text-right">Annual Price</th>
                  <th className="px-4 py-2 text-right">Dwelling</th>
                  <th className="px-4 py-2 text-right">Deductible</th>
                  <th className="px-4 py-2 text-right">Personal Property</th>
                  <th className="px-4 py-2 text-center">Flood</th>
                  <th className="px-4 py-2 text-center">Select</th>
                </tr>
              </thead>
              <tbody>
                {demoPolicies.map((p) => (
                  <tr key={p.id} className={selected === p.id ? "bg-blue-50" : ""}>
                    <td className="px-4 py-2 font-bold">{p.company}</td>
                    <td className="px-4 py-2 text-right">${p.price}</td>
                    <td className="px-4 py-2 text-right">${p.dwelling}</td>
                    <td className="px-4 py-2 text-right">${p.deductible}</td>
                    <td className="px-4 py-2 text-right">${p.personalProperty}</td>
                    <td className="px-4 py-2 text-center">
                      {p.flood ? (
                        <Check className="inline h-5 w-5 text-green-600" />
                      ) : (
                        <span className="inline-block w-5"></span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        className={`px-4 py-2 rounded ${selected === p.id ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-blue-100"}`}
                        onClick={() => setSelected(p.id)}
                      >
                        {selected === p.id ? "Selected" : "Select"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              onClick={() => onSelectQuote(demoPolicies.find(p => p.id === selected))}
              disabled={!selected}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
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