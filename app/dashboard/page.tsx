"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push("/(auth)/login");
    } else {
      setUserEmail(currentUser.email);
    }
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {userEmail}</p>
      <p>Here you will see trends, predictions, and AI insights.</p>
    </div>
  );
}
