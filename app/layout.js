import "./globals.css";

export const metadata = {
  title: "PulseGuard AI",
  description: "AI-powered global health intelligence platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
