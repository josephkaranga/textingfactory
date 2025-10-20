import React, { useEffect, useState } from "react";
import API from "../api/api.js";

export default function Dashboard() {
  const [status, setStatus] = useState("Checking backend connection...");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setStatus(res.data.message);
      } catch (err) {
        console.error(err);
        setStatus("Unable to fetch dashboard data ❌");
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg">{status}</p>
    </div>
  );
}
