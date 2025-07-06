import React, { useState } from 'react';
import { Camera, Upload, X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function PhotoUploadManager({ data, onSubmit, onBack }) {
  const [images, setImages] = useState(data || []);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = (files) => {
    setUploading(true);
    const newImages = Array.from(files).map((file, index) => ({
      id: `img_${Date.now()}_${index}`,
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
      category: 'exterior'
    }));
    setTimeout(() => {
      setImages(prev => [...prev, ...newImages]);
      setUploading(false);
    }, 1500);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const updateImageCategory = (id, category) => {
    setImages(prev => prev.map(img =>
      img.id === id ? { ...img, category } : img
    ));
  };

  const handleSubmit = () => {
    onSubmit(images);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Camera className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Property Photos</h2>
            <p className="text-gray-600 mt-2">Upload photos of your property for accurate assessment</p>
          </div>
          <div className="mb-8">
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex justify-center">
                    <Upload className="h-12 w-12 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Upload Property Photos</p>
                    <p className="text-gray-600">Drag and drop files here or click to browse</p>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>Exterior photos</span>
                    <span>•</span>
                    <span>Interior photos</span>
                    <span>•</span>
                    <span>Room photos</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
          {uploading && (
            <div className="mb-8">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin h-5 w-5 border-2 border-indigo-600 border-t-transparent rounded-full" />
                  <span className="text-indigo-700">Uploading photos...</span>
                </div>
              </div>
            </div>
          )}
          {images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Uploaded Photos ({images.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <button
                        onClick={() => removeImage(image.id)}
                        className="opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2">
                      <select
                        value={image.category}
                        onChange={(e) => updateImageCategory(image.id, e.target.value)}
                        className="w-full text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        <option value="exterior">Exterior</option>
                        <option value="interior">Interior</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="bathroom">Bathroom</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="living">Living Room</option>
                        <option value="garage">Garage</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="col-span-1 md:col-span-2 flex justify-between pt-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleSubmit}
              disabled={images.length === 0}
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