import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function ChartComponent({ analysis }) {
  if (!analysis.sample_rows || analysis.sample_rows.length === 0) return null;

  // Try to plot counts by "Policy Type" if available
  let chartData = [];
  if (analysis.columns.includes('Policy Type')) {
    const counts = {};
    analysis.sample_rows.forEach(r => {
      counts[r['Policy Type']] = (counts[r['Policy Type']] || 0) + 1;
    });
    chartData = Object.entries(counts).map(([type, count]) => ({ type, count }));
  }

  if (chartData.length === 0) return null;

  return (
    <div>
      <h4 className="text-blue-600 font-semibold mb-2">Policy Type Distribution (Sample)</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}