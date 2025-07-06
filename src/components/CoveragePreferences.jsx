import React, { useState } from 'react';
import { Shield, DollarSign, Plus, Minus, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CoveragePreferences({ data, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    dwelling: 300000,
    personalProperty: 75000,
    liability: 300000,
    deductible: 1000,
    flood: false,
    earthquake: false,
    ...data
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const increment = (key, step = 5000) => handleChange(key, formData[key] + step);
  const decrement = (key, step = 5000) => handleChange(key, Math.max(step, formData[key] - step));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <Shield className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Coverage Preferences</h2>
          </div>
          <p className="text-gray-600 mb-6">Choose the coverage limits and options that fit your needs.</p>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">Dwelling Coverage</label>
                <div className="flex items-center">
                  <button type="button" onClick={() => decrement('dwelling')} className="bg-blue-50 p-2 rounded hover:bg-blue-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min={50000}
                    max={2000000}
                    step={5000}
                    value={formData.dwelling}
                    onChange={e => handleChange('dwelling', Number(e.target.value))}
                    className="w-full mx-2 px-3 py-2 border rounded text-right"
                  />
                  <button type="button" onClick={() => increment('dwelling')} className="bg-blue-50 p-2 rounded hover:bg-blue-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Personal Property</label>
                <div className="flex items-center">
                  <button type="button" onClick={() => decrement('personalProperty', 2500)} className="bg-blue-50 p-2 rounded hover:bg-blue-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min={10000}
                    max={500000}
                    step={2500}
                    value={formData.personalProperty}
                    onChange={e => handleChange('personalProperty', Number(e.target.value))}
                    className="w-full mx-2 px-3 py-2 border rounded text-right"
                  />
                  <button type="button" onClick={() => increment('personalProperty', 2500)} className="bg-blue-50 p-2 rounded hover:bg-blue-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Liability</label>
                <input
                  type="number"
                  min={100000}
                  max={1000000}
                  step={50000}
                  value={formData.liability}
                  onChange={e => handleChange('liability', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-right"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Deductible</label>
                <input
                  type="number"
                  min={500}
                  max={10000}
                  step={500}
                  value={formData.deductible}
                  onChange={e => handleChange('deductible', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-right"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.flood}
                  onChange={e => handleChange('flood', e.target.checked)}
                  id="flood"
                  className="mr-2"
                />
                <label htmlFor="flood" className="font-medium">Add Flood Coverage</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.earthquake}
                  onChange={e => handleChange('earthquake', e.target.checked)}
                  id="earthquake"
                  className="mr-2"
                />
                <label htmlFor="earthquake" className="font-medium">Add Earthquake Coverage</label>
              </div>
            </div>
            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}