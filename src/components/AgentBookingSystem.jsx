import React, { useState } from 'react';
import { User, Phone, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const agents = [
  { id: 1, name: "Lisa Carter", phone: "555-123-4567", rating: 4.9 },
  { id: 2, name: "James Smith", phone: "555-234-5678", rating: 4.8 },
  { id: 3, name: "Priya Patel", phone: "555-345-6789", rating: 4.9 },
  { id: 4, name: "Diego Alvarez", phone: "555-456-7890", rating: 4.7 }
];

export default function AgentBookingSystem({ selectedQuote, onBooking, onBack }) {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBook = () => {
    setSuccess(true);
    setTimeout(() => {
      onBooking({ agent: agents.find(a => a.id === selectedAgent), date });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <User className="h-10 w-10 text-green-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Book a Call with an Agent</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Have questions? Book a call with a licensed agent for a free consultation.
          </p>
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {agents.map(agent => (
              <div
                key={agent.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAgent === agent.id ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => setSelectedAgent(agent.id)}
              >
                <div>
                  <div className="font-bold text-lg text-blue-900">{agent.name}</div>
                  <div className="text-gray-700 flex items-center">
                    <Phone className="h-4 w-4 mr-1" /> {agent.phone}
                  </div>
                  <div className="text-yellow-700 flex items-center text-sm">
                    <span className="mr-1">★</span>{agent.rating} rating
                  </div>
                </div>
                {selectedAgent === agent.id && (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                )}
              </div>
            ))}
          </div>
          {/* Date Picker */}
          <div className="mb-6 max-w-xs">
            <label className="block font-medium mb-2">
              Preferred Call Date
            </label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {success && (
            <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded p-3 mb-4 max-w-xs">
              <CheckCircle className="h-6 w-6 text-green-700" />
              <span className="text-green-700 font-semibold">Booking successful!</span>
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
              onClick={handleBook}
              disabled={!selectedAgent || !date || success}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
            >
              <span>Book Agent</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}