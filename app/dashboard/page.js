"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { app } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
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

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [region, setRegion] = useState("");
  const [disease, setDisease] = useState("");
  const [population, setPopulation] = useState("");
  const [vaccinationRate, setVaccinationRate] = useState("");
  const [riskScore, setRiskScore] = useState(null);
  const [recommendation, setRecommendation] = useState("");
  const [chartData, setChartData] = useState(null);

  // Auth check
  useEffect(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
  }, []);

  // Simulated trends
  useEffect(() => {
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

  const handlePredict = () => {
    const risk = Math.min(
      100,
      Math.floor(
        Math.random() * 50 +
          (population / 1000) * 0.2 +
          (100 - vaccinationRate) * 0.3
      )
    );
    setRiskScore(risk);

    const rec =
      risk > 70
        ? "High risk! Increase preventive measures and vaccination."
        : risk > 40
        ? "Moderate risk. Monitor closely and encourage vaccination."
        : "Low risk. Maintain current safety protocols.";
    setRecommendation(rec);

    setPredictions([
      { region, disease, risk, recommendation: rec, date: new Date().toLocaleString() },
      ...predictions,
    ]);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#0a66c2",
        color: "#fff",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <h2>PulseGuard AI</h2>
        {user && <p>Welcome, {user.email}</p>}
        <div>
          <a href="/dashboard" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>Dashboard</a>
          <a href="/trends" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>Global Trends</a>
          <a href="/predictions" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>AI Predictions</a>
          <a href="/security" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>Security</a>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "2rem" }}>
        <h1>Dashboard</h1>

        {/* AI Prediction Panel */}
        <div style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "2rem"
        }}>
          <h2>AI Prediction Engine</h2>
          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={{ marginBottom: "0.5rem", width: "100%" }}
          />
          <input
            type="text"
            placeholder="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            style={{ marginBottom: "0.5rem", width: "100%" }}
          />
          <input
            type="number"
            placeholder="Population"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            style={{ marginBottom: "0.5rem", width: "100%" }}
          />
          <input
            type="number"
            placeholder="Vaccination Rate (%)"
            value={vaccinationRate}
            onChange={(e) => setVaccinationRate(e.target.value)}
            style={{ marginBottom: "0.5rem", width: "100%" }}
          />
          <button onClick={handlePredict} style={{
            padding: "10px 20px",
            background: "#0a66c2",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>Predict Risk</button>

          {riskScore !== null && (
            <div style={{ marginTop: "1rem" }}>
              <p><strong>Risk Score:</strong> {riskScore}%</p>
              <p><strong>Recommendation:</strong> {recommendation}</p>
            </div>
          )}
        </div>

        {/* Global Trends Chart */}
        <div style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "2rem"
        }}>
          <h2>Global Health Trends</h2>
          {chartData && <Line data={chartData} options={{ responsive: true }} />}
        </div>

        {/* Prediction History */}
        <div style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}>
          <h2>Prediction History</h2>
          {predictions.length === 0 && <p>No predictions yet.</p>}
          {predictions.length > 0 && (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Date</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Region</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Disease</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Risk</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((p, i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{p.date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{p.region}</td>
                    <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{p.disease}</td>
                    <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{p.risk}%</td>
                    <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{p.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}
