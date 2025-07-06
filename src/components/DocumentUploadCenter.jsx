import React, { useState } from 'react';
import { FileText, Upload, X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function DocumentUploadCenter({ data, onSubmit, onBack }) {
  const [documents, setDocuments] = useState(data || []);
  const [uploading, setUploading] = useState(false);

  const documentTypes = [
    { type: 'deed', label: 'Property Deed', required: true },
    { type: 'purchase', label: 'Purchase Agreement', required: true },
    { type: 'previous_insurance', label: 'Previous Insurance', required: false },
    { type: 'renovation', label: 'Renovation Records', required: false },
    { type: 'inspection', label: 'Inspection Reports', required: false },
    { type: 'permits', label: 'Building Permits', required: false }
  ];

  const handleFileUpload = (files, documentType) => {
    setUploading(true);
    const newDocuments = Array.from(files).map((file, index) => ({
      id: `doc_${Date.now()}_${index}`,
      file,
      name: file.name,
      size: file.size,
      type: documentType,
      uploadDate: new Date().toISOString()
    }));
    setTimeout(() => {
      setDocuments(prev => [...prev, ...newDocuments]);
      setUploading(false);
    }, 1000);
  };

  const removeDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const handleSubmit = () => {
    onSubmit(documents);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-8 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Document Upload</h2>
            <p className="text-gray-600 mt-2">Upload required documents for your property</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentTypes.map((docType) => (
              <div key={docType.type} className="border border-gray-200 rounded-lg p-6 mb-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                      <span>{docType.label}</span>
                      {docType.required && <span className="text-red-500">*</span>}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {docType.required ? 'Required document' : 'Optional document'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e.target.files, docType.type)}
                      className="hidden"
                      id={`upload-${docType.type}`}
                    />
                    <label
                      htmlFor={`upload-${docType.type}`}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer flex items-center space-x-2"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Upload</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  {documents
                    .filter(doc => doc.type === docType.type)
                    .map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                            <p className="text-xs text-gray-500">
                              {(doc.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeDocument(doc.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            {uploading && (
              <div className="col-span-1 md:col-span-2 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3 mt-4">
                <div className="animate-spin h-5 w-5 border-2 border-green-600 border-t-transparent rounded-full" />
                <span className="text-green-700">Uploading document...</span>
              </div>
            )}
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-between pt-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleSubmit}
              disabled={documentTypes.some(dt => dt.required && !documents.find(d => d.type === dt.type))}
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