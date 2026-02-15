"use client";

import { useState } from "react";

export default function Security() {
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  const handleHash = async () => {
    if (!data) return;

    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    setHash(hashHex);
  };

  return (
    <div className="container" style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>Secure Hash Generator</h1>
      <p>Enter sensitive data to generate a cryptographic SHA-256 hash.</p>

      <input
        type="text"
        placeholder="Sensitive data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleHash}>Generate Hash</button>

      {hash && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Hash:</h3>
          <p style={{ wordBreak: "break-all" }}>{hash}</p>
        </div>
      )}
    </div>
  );
}
