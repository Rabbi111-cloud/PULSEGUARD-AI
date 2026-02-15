"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Trends() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulated global trends
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const cases = labels.map(() => Math.floor(Math.random() * 1000 + 100));

    setChartData({
      labels,
      datasets: [
        {
          label: "Infection Cases",
          data: cases,
          borderColor: "#0a66c2",
          backgroundColor: "#1e90ff33",
        },
      ],
    });
  }, []);

  return (
    <div className="container" style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>Global Health Trends</h1>
      <p>Monitor disease growth worldwide.</p>

      {chartData && (
        <div style={{ marginTop: "2rem" }}>
          <Line data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
}
