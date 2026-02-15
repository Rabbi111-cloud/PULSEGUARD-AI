import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>PulseGuard AI</h1>
      <p>AI-Powered Global Health Intelligence Platform</p>

      <Link href="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
