import React, { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => setData(res.data.message))
      .catch((err) => setData("Unable to fetch dashboard data ❌"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <p>{data}</p>
    </div>
  );
}
