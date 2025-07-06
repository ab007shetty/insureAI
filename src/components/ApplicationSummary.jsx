import React from 'react';
import { Check, ArrowLeft, ArrowRight, FileText } from 'lucide-react';

export default function ApplicationSummary({ applicationData, onSubmit, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <FileText className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Review & Submit Application</h2>
          </div>
          <p className="text-gray-600 mb-6">Please review the details below before submitting your application.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Personal Info</h3>
              <ul className="text-gray-700 text-sm">
                <li><b>Name: </b>{applicationData.personalInfo.firstName} {applicationData.personalInfo.lastName}</li>
                <li><b>Email: </b>{applicationData.personalInfo.email}</li>
                <li><b>Phone: </b>{applicationData.personalInfo.phone}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Property</h3>
              <ul className="text-gray-700 text-sm">
                <li><b>Address: </b>{applicationData.location.address}, {applicationData.location.city}, {applicationData.location.state} {applicationData.location.zipCode}</li>
                <li><b>Type: </b>{applicationData.propertyDetails.propertyType}</li>
                <li><b>Year Built: </b>{applicationData.propertyDetails.yearBuilt}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Coverage</h3>
              <ul className="text-gray-700 text-sm">
                <li><b>Dwelling: </b>${applicationData.coveragePreferences.dwelling}</li>
                <li><b>Personal Property: </b>${applicationData.coveragePreferences.personalProperty}</li>
                <li><b>Liability: </b>${applicationData.coveragePreferences.liability}</li>
                <li><b>Deductible: </b>${applicationData.coveragePreferences.deductible}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Quote</h3>
              <ul className="text-gray-700 text-sm">
                <li><b>Company: </b>{applicationData.selectedQuote?.company}</li>
                <li><b>Annual Price: </b>${applicationData.selectedQuote?.price}</li>
              </ul>
            </div>
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
              onClick={onSubmit}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Submit Application</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}