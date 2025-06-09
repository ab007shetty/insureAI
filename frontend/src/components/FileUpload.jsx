import React, { useRef, useState } from "react";

const FAKE_ANALYSIS = {
  record_count: 1340,
  columns: [
    "index","PatientID","age","gender","bmi","bloodpressure","diabetic","children","smoker","region","claim",
  ],
  sample_rows: [
    { index: 0, PatientID: 1, age: 39, gender: "male", bmi: 23.2, bloodpressure: 91, diabetic: "Yes", children: 0, smoker: "No", region: "southeast", claim: 1121.87 },
    { index: 1, PatientID: 2, age: 24, gender: "male", bmi: 30.1, bloodpressure: 87, diabetic: "No", children: 0, smoker: "No", region: "southeast", claim: 1131.51 },
    { index: 2, PatientID: 3, age: 55, gender: "female", bmi: 27.5, bloodpressure: 93, diabetic: "Yes", children: 2, smoker: "Yes", region: "northwest", claim: 1500 },
    { index: 3, PatientID: 4, age: 37, gender: "male", bmi: 29.8, bloodpressure: 80, diabetic: "No", children: 1, smoker: "No", region: "southwest", claim: 1200.25 },
    { index: 4, PatientID: 5, age: 45, gender: "female", bmi: 31.6, bloodpressure: 100, diabetic: "No", children: 3, smoker: "No", region: "northeast", claim: 1350.4 },
  ],
  insights: [
    "Detected 4 unique policies.",
    "Top region: southeast",
    "Average claim amount: 1260.41 units",
    "Potential anomaly: record 3 has a high claim relative to age/bmi.",
  ],
  region_claims: [
    { region: "southeast", claims: 500 },
    { region: "northwest", claims: 400 },
    { region: "southwest", claims: 250 },
    { region: "northeast", claims: 190 },
  ],
};

export default function FileUpload({ onAnalysis }) {
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef();

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  }

  function clearFile() {
    setFileName("");
    inputRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!fileName) return;
    setIsUploading(true);

    // Simulate "upload" and scroll to results section
    setTimeout(() => {
      setIsUploading(false);
      onAnalysis({ ...FAKE_ANALYSIS, file_name: fileName });
      setTimeout(() => {
        const resultsSection = document.getElementById("results-section");
        resultsSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="block relative">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          CSV File
        </span>
        <input
          type="file"
          accept=".csv"
          ref={inputRef}
          required
          className="block w-full border rounded px-3 py-2 mt-1"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        {/* Reserve space for file name and cross button using min-height */}
        <div style={{ minHeight: "2.25rem" }} className="flex items-center mt-2">
          {fileName ? (
            <>
              <span className="text-gray-700 text-sm flex-1 truncate">{fileName}</span>
              <button
                type="button"
                onClick={clearFile}
                className="ml-2 text-gray-400 hover:text-red-500 p-1 rounded focus:outline-none"
                aria-label="Remove selected file"
                title="Remove"
                tabIndex={0}
                disabled={isUploading}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </>
          ) : (
            // Empty span for consistent layout
            <span className="text-gray-700 text-sm flex-1 truncate">&nbsp;</span>
          )}
        </div>
      </label>
      <button
        type="submit"
        disabled={!fileName || isUploading}
        className={`bg-blue-700 text-white px-4 py-2 rounded-md mt-2 font-semibold shadow hover:bg-blue-800 transition flex items-center justify-center ${
          isUploading ? "opacity-60 cursor-wait" : ""
        }`}
      >
        {isUploading && (
          <svg className="animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        )}
        {isUploading ? "Analyzing..." : "Upload & Analyze"}
      </button>
    </form>
  );
}