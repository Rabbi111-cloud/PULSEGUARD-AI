"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#0a66c2",
      color: "#fff",
    }}>
      <h1 style={{ fontWeight: "bold" }}>PulseGuard AI</h1>
      <div>
        <Link href="/login">
          <button style={{
            marginRight: "1rem",
            padding: "8px 16px",
            background: "#fff",
            color: "#0a66c2",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}>Login</button>
        </Link>
        <Link href="/signup">
          <button style={{
            padding: "8px 16px",
            background: "#fff",
            color: "#0a66c2",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}>Signup</button>
        </Link>
      </div>
    </nav>
  );
}
