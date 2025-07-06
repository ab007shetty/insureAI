import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProgressTracker from './ProgressTracker';
import LandingPage from './LandingPage';
import PersonalInfoForm from './PersonalInfoForm';
import LocationCapture from './LocationCapture';
import PropertyDetailsForm from './PropertyDetailsForm';
import PhotoUploadManager from './PhotoUploadManager';
import ThreeDModelGenerator from './ThreeDModelGenerator';
import DocumentUploadCenter from './DocumentUploadCenter';
import AIAnalysisEngine from './AIAnalysisEngine';
import CoveragePreferences from './CoveragePreferences';
import QuoteGenerator from './QuoteGenerator';
import PolicyComparison from './PolicyComparison';
import AgentBookingSystem from './AgentBookingSystem';
import ApplicationSummary from './ApplicationSummary';
import ConfirmationPage from './ConfirmationPage';

const steps = [
  'landing',
  'personal-info',
  'location',
  'property-details',
  'photo-upload',
  'model-generation',
  'document-upload',
  'ai-analysis',
  'coverage-preferences',
  'quote-generation',
  'policy-comparison',
  'agent-booking',
  'application-summary',
  'confirmation'
];

const stepLabels = {
  'personal-info': 'Personal Info',
  'location': 'Location',
  'property-details': 'Property Details',
  'photo-upload': 'Photos',
  'model-generation': '3D Model',
  'document-upload': 'Documents',
  'ai-analysis': 'AI Analysis',
  'coverage-preferences': 'Coverage',
  'quote-generation': 'Quotes',
  'policy-comparison': 'Compare',
  'agent-booking': 'Agent',
  'application-summary': 'Review',
  'confirmation': 'Complete'
};

export default function MainForm() {
  const [currentStep, setCurrentStep] = useState('landing');
  const [applicationData, setApplicationData] = useState({
    personalInfo: {},
    location: {},
    propertyDetails: {},
    propertyImages: [],
    documents: [],
    coveragePreferences: {},
    selectedQuote: null,
    agentBooking: null
  });

  useEffect(() => {
    if (currentStep === 'confirmation') {
      const timer = setTimeout(() => setCurrentStep('landing'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const updateApplicationData = (section, data) => {
    setApplicationData(prev => ({
      ...prev,
      [section]: Array.isArray(data) ? data : { ...prev[section], ...data }
    }));
  };

  const nextStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const goToStep = (step) => setCurrentStep(step);
  const showProgress = currentStep !== 'landing' && currentStep !== 'confirmation';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Landing page with regular navbar */}
      {currentStep === 'landing' && (
        <>
          <Navbar 
            onLogoClick={() => setCurrentStep('landing')} 
            className="z-50"
          />
          <div className="pt-[80px]">
            <LandingPage onGetStarted={() => setCurrentStep('personal-info')} />
          </div>
        </>
      )}

      {/* Form pages with progress bar header */}
      {showProgress && (
        <>
          <ProgressTracker
            currentStep={currentStep}
            steps={steps}
            labels={stepLabels}
            onStepClick={goToStep}
            onLogoClick={() => setCurrentStep('landing')}
          />
          <div className="pt-[110px]">
            {(() => {
              switch (currentStep) {
                case 'personal-info':
                  return (
                    <PersonalInfoForm
                      data={applicationData.personalInfo}
                      onSubmit={data => { updateApplicationData('personalInfo', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'location':
                  return (
                    <LocationCapture
                      data={applicationData.location}
                      onSubmit={data => { updateApplicationData('location', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'property-details':
                  return (
                    <PropertyDetailsForm
                      data={applicationData.propertyDetails}
                      onSubmit={data => { updateApplicationData('propertyDetails', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'photo-upload':
                  return (
                    <PhotoUploadManager
                      data={applicationData.propertyImages}
                      onSubmit={data => { updateApplicationData('propertyImages', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'model-generation':
                  return (
                    <ThreeDModelGenerator
                      images={applicationData.propertyImages}
                      onComplete={nextStep}
                      onBack={prevStep}
                    />
                  );
                case 'document-upload':
                  return (
                    <DocumentUploadCenter
                      data={applicationData.documents}
                      onSubmit={data => { updateApplicationData('documents', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'ai-analysis':
                  return (
                    <AIAnalysisEngine
                      applicationData={applicationData}
                      onComplete={nextStep}
                      onBack={prevStep}
                    />
                  );
                case 'coverage-preferences':
                  return (
                    <CoveragePreferences
                      data={applicationData.coveragePreferences}
                      onSubmit={data => { updateApplicationData('coveragePreferences', data); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'quote-generation':
                  return (
                    <QuoteGenerator
                      applicationData={applicationData}
                      onComplete={nextStep}
                      onBack={prevStep}
                    />
                  );
                case 'policy-comparison':
                  return (
                    <PolicyComparison
                      applicationData={applicationData}
                      onSelectQuote={quote => { updateApplicationData('selectedQuote', quote); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'agent-booking':
                  return (
                    <AgentBookingSystem
                      selectedQuote={applicationData.selectedQuote}
                      onBooking={booking => { updateApplicationData('agentBooking', booking); nextStep(); }}
                      onBack={prevStep}
                    />
                  );
                case 'application-summary':
                  return (
                    <ApplicationSummary
                      applicationData={applicationData}
                      onSubmit={nextStep}
                      onBack={prevStep}
                    />
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </>
      )}

      {/* Confirmation page without any header */}
      {currentStep === 'confirmation' && (
        <ConfirmationPage
          applicationData={applicationData}
        />
      )}
    </div>
  );
}