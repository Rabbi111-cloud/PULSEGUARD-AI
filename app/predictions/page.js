"use client";

import { useState } from "react";

export default function Predictions() {
  const [region, setRegion] = useState("");
  const [disease, setDisease] = useState("");
  const [population, setPopulation] = useState("");
  const [vaccinationRate, setVaccinationRate] = useState("");
  const [riskScore, setRiskScore] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const handlePredict = async () => {
    // Simulated AI prediction logic
    const risk = Math.min(
      100,
      Math.floor(
        Math.random() * 50 +
          (population / 1000) * 0.2 +
          (100 - vaccinationRate) * 0.3
      )
    );

    setRiskScore(risk);
    setRecommendation(
      risk > 70
        ? "High risk! Increase preventive measures and vaccination."
        : risk > 40
        ? "Moderate risk. Monitor closely and encourage vaccination."
        : "Low risk. Maintain current safety protocols."
    );
  };

  return (
    <div className="container" style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>AI Prediction Engine</h1>
      <p>Enter data to predict health risk levels.</p>

      <input
        type="text"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Disease"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
      />
      <input
        type="number"
        placeholder="Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Vaccination Rate (%)"
        value={vaccinationRate}
        onChange={(e) => setVaccinationRate(e.target.value)}
      />

      <button onClick={handlePredict}>Predict Risk</button>

      {riskScore !== null && (
        <div style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Prediction Result</h3>
          <p><strong>Risk Score:</strong> {riskScore}%</p>
          <p><strong>Recommendation:</strong> {recommendation}</p>
        </div>
      )}
    </div>
  );
}
