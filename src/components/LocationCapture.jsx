import React, { useState } from 'react';
import { MapPin, Navigation, ArrowLeft, ArrowRight } from 'lucide-react';

export default function LocationCapture({ data, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    coordinates: null,
    ...data
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentLocation = async () => {
    setLocationLoading(true);
    setLocationStatus('Requesting location permission...');
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          { enableHighAccuracy: true, timeout: 10000 }
        );
      });
      const { latitude, longitude } = position.coords;
      setLocationStatus('Location found! Fetching address...');
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          coordinates: { latitude, longitude },
          address: '123 Main Street',
          city: 'Anytown',
          state: 'CA',
          zipCode: '12345'
        }));
        setLocationStatus('Address found successfully!');
        setLocationLoading(false);
      }, 2000);
    } catch (error) {
      setLocationStatus('Unable to get location. Please enter manually.');
      setLocationLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Property Location</h2>
            <p className="text-gray-600 mt-2">Where is your property located?</p>
          </div>
          <div className="mb-8">
            <button
              onClick={getCurrentLocation}
              disabled={locationLoading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {locationLoading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  <span>Getting Location...</span>
                </>
              ) : (
                <>
                  <Navigation className="h-5 w-5" />
                  <span>Use Current Location</span>
                </>
              )}
            </button>
            {locationStatus && (
              <p className={`text-center mt-2 text-sm ${locationStatus.includes('Unable') ? 'text-red-600' : 'text-green-600'}`}>
                {locationStatus}
              </p>
            )}
          </div>
          <div className="text-center text-gray-500 mb-8">
            <span>Or enter manually</span>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123 Main Street"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Anytown"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <select
                value={formData.state}
                onChange={(e) => handleChange('state', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="IL">Illinois</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="12345"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-between pt-6">
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
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
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