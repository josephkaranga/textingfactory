import React, { useEffect, useState } from 'react';
import API from '../api/api.js';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get('/dashboard')
      .then(res => setData(res.data))
      .catch(() => setError('Unable to fetch dashboard data ❌'));
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Users: {data.totalUsers}</p>
      <p>Total Messages: {data.totalMessages}</p>
      <p>Total Payments: {data.totalPayments}</p>
    </div>
  );
}
