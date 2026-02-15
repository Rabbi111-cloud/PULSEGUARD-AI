import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0a66c2, #1e90ff)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          AI-Powered Global Health Intelligence
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}>
          Analyze healthcare trends, predict risks, and secure patient data — all in one platform built for startups and research institutions.
        </p>
        <div>
          <a href="/signup">
            <button style={{
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              background: "#fff",
              color: "#0a66c2",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>Get Started</button>
          </a>
        </div>
      </section>
