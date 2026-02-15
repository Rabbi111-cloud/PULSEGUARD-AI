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
<section style={{ padding: "4rem 2rem", background: "#f4f8fb" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
          Why PulseGuard AI
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "2rem"
        }}>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            flex: "1 1 250px"
          }}>
            <h3 style={{ marginBottom: "1rem" }}>Global Health Trends</h3>
            <p>Track diseases, mortality rates, and healthcare startup movements worldwide.</p>
          </div>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            flex: "1 1 250px"
          }}>
            <h3 style={{ marginBottom: "1rem" }}>AI Predictions</h3>
            <p>Forecast health risks with AI-driven insights and simulations for startups.</p>
          </div>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            flex: "1 1 250px"
          }}>
            <h3 style={{ marginBottom: "1rem" }}>Data Security</h3>
            <p>Cryptographically secure and tamper-proof storage for sensitive health information.</p>
          </div>
        </div>
      </section>
<footer style={{
        background: "#0a66c2",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        marginTop: "2rem"
      }}>
        <p>© 2026 PulseGuard AI. All rights reserved.</p>
        <p>
          <a href="/privacy" style={{ color: "#fff", marginRight: "1rem" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "#fff" }}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
