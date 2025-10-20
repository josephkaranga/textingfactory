import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="bg-black text-white py-24 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/chat-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 py-16 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Work From Home as a Chat Operator 💬
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Earn money online chatting with customers and helping businesses engage their users — anytime, anywhere.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium"
          >
            Start Today
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="text-blue-500 text-5xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">1. Apply Online</h3>
            <p>Complete a short application and verification process.</p>
          </div>
          <div>
            <div className="text-blue-500 text-5xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">2. Start Chatting</h3>
            <p>Get access to our dashboard and start real-time customer chats.</p>
          </div>
          <div>
            <div className="text-blue-500 text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">3. Get Paid Weekly</h3>
            <p>Receive payments directly to your account — on time, every week.</p>
          </div>
        </div>
      </section>

      {/* EARNING POTENTIAL */}
      <section id="earn" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Your Earning Potential</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            Most chat operators earn{" "}
            <span className="font-bold text-blue-600">$300 - $800 per week</span>, depending on activity and hours worked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-blue-500">$50+</p>
              <p className="text-gray-600 mt-2">Per Day (Part Time)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-blue-500">$500+</p>
              <p className="text-gray-600 mt-2">Per Week (Full Time)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-blue-500">$2,000+</p>
              <p className="text-gray-600 mt-2">Per Month (Top Earners)</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Chat Operators Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="italic">
              “The best remote job ever — I can work while caring for my kids!”
            </p>
            <p className="mt-4 font-bold">– Lisa, Kenya 🇰🇪</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="italic">
              “They pay weekly and the chats are fun. I’ve already made $500 this month.”
            </p>
            <p className="mt-4 font-bold">– Mark, South Africa 🇿🇦</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="italic">
              “Started part-time — now I do this full-time and love it.”
            </p>
            <p className="mt-4 font-bold">– Grace, Rwanda 🇷🇼</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join the Team?</h2>
        <p className="text-lg mb-8">
          Start your online career today — it only takes 2 minutes to apply.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Apply Now
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
