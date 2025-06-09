import React, { useState, useEffect, useRef } from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import DataTable from "react-data-table-component";

// Register Chart.js elements once
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

// Demo Insights Data
const INSIGHTS = [
  "Average claim amount increased by 12% vs last year.",
  "Region 'southeast' has 42% of total claims.",
  "52% of claimants are under 40 years old.",
  "Smokers file 3x more claims on average.",
  "5% of claims exceed 3 standard deviations (potential fraud).",
  "Most frequent policy type: Family.",
  "Top 10% BMI claimants have 33% higher mean claim."
];

const RISKS = [
  "High claim density in southeast region.",
  "Multiple claims from same PatientID in short period.",
  "BMI>35 patients show 2x higher claim frequency.",
  "High claims from 'northwest' suggest possible overbilling."
];

const RECOMMENDATIONS = [
  "Review claims from southeast region for anomalies.",
  "Flag patients with >2 claims in 30 days.",
  "Recommend additional verification for claims >$3000.",
  "Promote wellness programs for high BMI policyholders."
];

const WARNINGS = [
  "⚠️ Unusual spike in claims from region 'northwest' in May.",
  "⚠️ 3 claims missing 'bloodpressure' data."
];

// Generate fake sample data
function randomRow(i) {
  return {
    index: i + 1,
    PatientID: 1001 + i,
    age: Math.floor(Math.random() * 50) + 18,
    gender: Math.random() > 0.5 ? "male" : "female",
    bmi: (Math.random() * 15 + 18).toFixed(1),
    bloodpressure: Math.floor(Math.random() * 40) + 80,
    diabetic: Math.random() > 0.7 ? "Yes" : "No",
    children: Math.floor(Math.random() * 4),
    smoker: Math.random() > 0.8 ? "Yes" : "No",
    region: ["southeast", "northwest", "southwest", "northeast"][Math.floor(Math.random()*4)],
    claim: (Math.random() * 4000 + 1000).toFixed(2)
  };
}

const COLUMNS = [
  { name: "PatientID", selector: row => row.PatientID, sortable: true },
  { name: "Age", selector: row => row.age, sortable: true, right: true },
  { name: "Gender", selector: row => row.gender, sortable: true },
  { name: "BMI", selector: row => row.bmi, sortable: true, right: true },
  { name: "Blood Pressure", selector: row => row.bloodpressure, sortable: true, right: true },
  { name: "Diabetic", selector: row => row.diabetic, sortable: true },
  { name: "Children", selector: row => row.children, sortable: true, right: true },
  { name: "Smoker", selector: row => row.smoker, sortable: true },
  { name: "Region", selector: row => row.region, sortable: true },
  { name: "Claim", selector: row => row.claim, sortable: true, right: true }
];

function ChartCard({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-72 min-w-0">
      <h4 className="font-semibold text-blue-700 mb-3 text-center">{title}</h4>
      <div className="w-full h-48 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function InsightsDashboard({ analysis }) {
  const [rowCount, setRowCount] = useState(10);
  const [dataRows] = useState(() => Array.from({ length: 100 }, (_, i) => randomRow(i)));
  const resultsRef = useRef(null);

  useEffect(() => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Chart data preparation (all calculations outside render)
  // --- Bar: Claims by Region ---
  const regionCounts = dataRows.reduce((acc, r) => {
    acc[r.region] = (acc[r.region] || 0) + 1;
    return acc;
  }, {});
  const regionLabels = Object.keys(regionCounts);
  const regionData = Object.values(regionCounts);

  // --- Pie: Age Distribution ---
  const ageDist = Array(6).fill(0); // 18-25, 26-35, 36-45, 46-55, 56-65, 66+
  dataRows.forEach(r => {
    const a = r.age;
    if (a < 26) ageDist[0] += 1;
    else if (a < 36) ageDist[1] += 1;
    else if (a < 46) ageDist[2] += 1;
    else if (a < 56) ageDist[3] += 1;
    else if (a < 66) ageDist[4] += 1;
    else ageDist[5] += 1;
  });

  // --- Doughnut: Gender Split ---
  const genderCounts = dataRows.reduce((acc, r) => {
    acc[r.gender] = (acc[r.gender] || 0) + 1;
    return acc;
  }, {});
  const genderLabels = Object.keys(genderCounts);
  const genderData = Object.values(genderCounts);

  // --- Bar: Smoker vs Non-Smoker ---
  const smokerCounts = dataRows.reduce((acc, r) => {
    acc[r.smoker] = (acc[r.smoker] || 0) + 1;
    return acc;
  }, {});
  const smokerLabels = Object.keys(smokerCounts);
  const smokerData = Object.values(smokerCounts);

  // --- Line: Claim Amount Trend (First 20) ---
  const trendLabels = dataRows.slice(0, 20).map((r, i) => `#${r.PatientID}`);
  const trendData = dataRows.slice(0, 20).map(r => r.claim);

  return (
    <div
      id="results-section"
      ref={resultsRef}
      className="bg-gradient-to-b from-blue-100 via-white to-blue-50 rounded-2xl border border-blue-100 shadow-lg p-8"
    >
      {/* Responsive top: Left text, Right charts */}
      <div className="flex flex-col lg:flex-row gap-10 mb-8">
        {/* Left: Text Panels */}
        <aside className="lg:w-1/3 flex-shrink-0 flex flex-col gap-6">
          {/* Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-blue-700 font-bold text-lg mb-2">Summary</h3>
            <div className="text-gray-800 space-y-1">
              <div>Total Claims: <span className="font-bold">{dataRows.length}</span></div>
              <div>Avg Claim: <span className="font-bold">${(dataRows.reduce((a, r) => a + parseFloat(r.claim), 0) / dataRows.length).toFixed(2)}</span></div>
              <div>Unique Regions: <span className="font-bold">{regionLabels.length}</span></div>
            </div>
          </div>
          {/* Risks */}
          <div className="bg-yellow-50 rounded-xl shadow-sm p-6">
            <h3 className="text-yellow-700 font-bold text-md mb-1">Possible Risks</h3>
            <ul className="text-sm text-yellow-800 pl-3 list-disc space-y-1">
              {RISKS.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>
          {/* Warnings */}
          <div className="bg-red-50 rounded-xl shadow-sm p-6">
            <h3 className="text-red-600 font-bold text-md mb-1">Warnings</h3>
            <ul className="text-sm text-red-700 pl-3 list-disc space-y-1">
              {WARNINGS.map((w, idx) => <li key={idx}>{w}</li>)}
            </ul>
          </div>
          {/* Recommendations */}
          <div className="bg-green-50 rounded-xl shadow-sm p-6">
            <h3 className="text-green-700 font-bold text-md mb-1">Recommended Actions</h3>
            <ul className="text-sm text-green-800 pl-3 list-disc space-y-1">
              {RECOMMENDATIONS.map((act, idx) => <li key={idx}>{act}</li>)}
            </ul>
          </div>
        </aside>
        {/* Right: Graph Grid */}
        <section className="flex-1 grid md:grid-cols-2 gap-7 min-w-0">
          <ChartCard title="Claims by Region">
            <Bar
              data={{
                labels: regionLabels,
                datasets: [
                  {
                    label: "Claims",
                    data: regionData,
                    backgroundColor: ["#2563EB", "#60A5FA", "#818CF8", "#FBBF24"],
                  }
                ]
              }}
              options={{
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { beginAtZero: true, ticks: { stepSize: 5 } }
                }
              }}
              height={180}
            />
          </ChartCard>
          <ChartCard title="Age Distribution">
            <Pie
              data={{
                labels: ["18-25", "26-35", "36-45", "46-55", "56-65", "66+"],
                datasets: [
                  {
                    label: "Count",
                    data: ageDist,
                    backgroundColor: ["#60A5FA", "#93C5FD", "#818CF8", "#2563EB", "#1E40AF", "#F472B6"]
                  }
                ]
              }}
              options={{
                plugins: { legend: { position: "bottom" } },
                responsive: true,
                maintainAspectRatio: false
              }}
              height={180}
            />
          </ChartCard>
          <ChartCard title="Gender Split">
            <Doughnut
              data={{
                labels: genderLabels,
                datasets: [{
                  label: "Gender",
                  data: genderData,
                  backgroundColor: ["#FBBF24", "#2563EB"]
                }]
              }}
              options={{
                plugins: { legend: { position: "right" } },
                responsive: true,
                maintainAspectRatio: false
              }}
              height={180}
            />
          </ChartCard>
          <ChartCard title="Smoker vs Non-Smoker">
            <Bar
              data={{
                labels: smokerLabels,
                datasets: [{
                  label: "Count",
                  data: smokerData,
                  backgroundColor: ["#F87171", "#38BDF8"]
                }]
              }}
              options={{
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, ticks: { stepSize: 5 } } }
              }}
              height={180}
            />
          </ChartCard>
          <ChartCard title="Claim Amount Trend (First 20)">
            <Line
              data={{
                labels: trendLabels,
                datasets: [{
                  label: "Claim $",
                  data: trendData,
                  fill: false,
                  borderColor: "#22c55e",
                  backgroundColor: "#22c55e"
                }]
              }}
              options={{
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { beginAtZero: true }
                }
              }}
              height={180}
            />
          </ChartCard>
          <div className="md:col-span-2">
            <div className="bg-indigo-50 rounded-xl shadow p-5 mt-3">
              <h4 className="font-bold text-indigo-700 mb-2 text-lg">Key Insights</h4>
              <ul className="list-disc ml-6 text-gray-800 text-base space-y-1">
                {INSIGHTS.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Data Table */}
      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:items-center mb-2 gap-3">
          <h3 className="font-semibold text-blue-700 mr-4">Sample Records</h3>
          <label className="text-sm text-gray-600">
            Show
            <select
              className="mx-2 border rounded px-1 py-0.5"
              value={rowCount}
              onChange={e => setRowCount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            rows
          </label>
        </div>
        <DataTable
          columns={COLUMNS}
          data={dataRows.slice(0, rowCount)}
          pagination
          highlightOnHover
          dense
          responsive
          subHeader
          persistTableHead
        />
      </div>
      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} InsureAI Dashboard &mdash; Powered by React, Chart.js, and TailwindCSS
      </footer>
    </div>
  );
}

export default InsightsDashboard;