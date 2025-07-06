import React, { useState } from 'react';
import { Building, ArrowLeft, ArrowRight } from 'lucide-react';

export default function PropertyDetailsForm({ data, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    propertyType: '',
    yearBuilt: '',
    squareFootage: '',
    bedrooms: '',
    bathrooms: '',
    roofType: '',
    heatingType: '',
    foundationType: '',
    ...data
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-8 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Building className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Property Details</h2>
            <p className="text-gray-600 mt-2">Tell us about your property</p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type *
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => handleChange('propertyType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Property Type</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="duplex">Duplex</option>
                <option value="manufactured">Manufactured Home</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year Built *
              </label>
              <input
                type="number"
                value={formData.yearBuilt}
                onChange={(e) => handleChange('yearBuilt', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="2010"
                min="1800"
                max="2024"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Square Footage *
              </label>
              <input
                type="number"
                value={formData.squareFootage}
                onChange={(e) => handleChange('squareFootage', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="2500"
                min="100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bedrooms *
              </label>
              <select
                value={formData.bedrooms}
                onChange={(e) => handleChange('bedrooms', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bathrooms *
              </label>
              <select
                value={formData.bathrooms}
                onChange={(e) => handleChange('bathrooms', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select</option>
                <option value="1">1 Bathroom</option>
                <option value="1.5">1.5 Bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="2.5">2.5 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="3.5">3.5 Bathrooms</option>
                <option value="4+">4+ Bathrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roof Type *
              </label>
              <select
                value={formData.roofType}
                onChange={(e) => handleChange('roofType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Roof Type</option>
                <option value="asphalt">Asphalt Shingles</option>
                <option value="tile">Tile</option>
                <option value="metal">Metal</option>
                <option value="slate">Slate</option>
                <option value="wood">Wood</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heating Type *
              </label>
              <select
                value={formData.heatingType}
                onChange={(e) => handleChange('heatingType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Heating Type</option>
                <option value="central">Central Gas</option>
                <option value="electric">Electric</option>
                <option value="oil">Oil</option>
                <option value="heat-pump">Heat Pump</option>
                <option value="radiant">Radiant</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foundation Type *
              </label>
              <select
                value={formData.foundationType}
                onChange={(e) => handleChange('foundationType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Foundation Type</option>
                <option value="slab">Slab</option>
                <option value="crawl">Crawl Space</option>
                <option value="basement">Basement</option>
                <option value="pier">Pier & Beam</option>
              </select>
            </div>
            <div className="col-span-1 lg:col-span-3 flex justify-between pt-6">
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
                className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
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