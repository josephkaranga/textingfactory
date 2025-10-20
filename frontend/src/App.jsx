import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link className="text-blue-700" to="/">Register</Link>
        <Link className="text-blue-700" to="/login">Login</Link>
        <Link className="text-blue-700" to="/dashboard">Dashboard</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
