"use client";

import { useState } from "react";
import { app } from "../../lib/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setMessage("");

    try {
      const { getAuth, createUserWithEmailAndPassword } = await import("firebase/auth");
      const auth = getAuth(app);

      await createUserWithEmailAndPassword(auth, email, password);

      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login"; // redirect to login
      }, 1500);
    } catch (err) {
      console.error(err);
      setMessage("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#f4f8fb",
      padding: "2rem"
    }}>
      <div style={{
        width: "400px",
        padding: "2rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Create Account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#0a66c2",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {message && <p style={{ marginTop: "1rem", textAlign: "center", color: message.includes("successful") ? "green" : "red" }}>{message}</p>}

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? <a href="/login" style={{ color: "#0a66c2", fontWeight: "bold" }}>Login</a>
        </p>
      </div>
    </div>
  );
}
