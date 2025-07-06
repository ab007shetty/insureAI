import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage({ applicationData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-16 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
        <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
        <h2 className="text-4xl font-bold text-green-700 mb-2">Application Submitted!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Thank you, {applicationData.personalInfo.firstName}! Your home insurance application is being reviewed.
        </p>
        <div className="text-sm text-gray-500">
          Expect a response from our team within 1 business day.<br />
          Confirmation sent to: <span className="font-bold">{applicationData.personalInfo.email}</span>
        </div>
      </div>
    </div>
  );
}