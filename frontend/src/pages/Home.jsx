import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  // Live earnings counter
  useEffect(() => {
    let start = 0;
    const end = 120000; // Example earnings
    const duration = 2000;
    let increment = end / (duration / 50);
    const counter = document.getElementById('totalEarnings');
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      if (counter) counter.innerText = start.toLocaleString();
    }, 50);
  }, []);

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
            As a freelancer with Texting Factory you can work from anywhere in the world.
            You’ll work online when you want, from where you want, and as much as you want.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Chat Operators Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Lisa */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src="/images/lisa.jpg"
              alt="Lisa" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <p className="italic text-gray-700 mb-2">
              “The best remote job ever — I can work while caring for my kids!”
            </p>
            <p className="mt-2 font-bold text-gray-900">– Lisa, Kenya 🇰🇪</p>
          </div>

          {/* Mark */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src="/images/mark.jpg" 
              alt="Mark" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-green-500"
            />
            <p className="italic text-gray-700 mb-2">
              “They pay weekly and the chats are fun. I’ve already made $500 this month.”
            </p>
            <p className="mt-2 font-bold text-gray-900">– Mark, South Africa 🇿🇦</p>
          </div>

          {/* Grace */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src="/images/grace.jpg" 
              alt="Grace" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-pink-500"
            />
            <p className="italic text-gray-700 mb-2">
              “Started part-time — now I do this full-time and love it.”
            </p>
            <p className="mt-2 font-bold text-gray-900">– Grace, Rwanda 🇷🇼</p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY CLIENTS */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted By</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
          <img src="/images/logo1.png" alt="Company 1" className="h-12 md:h-16 object-contain" />
          <img src="/images/logo2.png" alt="Company 2" className="h-12 md:h-16 object-contain" />
          <img src="/images/logo3.png" alt="Company 3" className="h-12 md:h-16 object-contain" />
          <img src="/images/logo4.png" alt="Company 4" className="h-12 md:h-16 object-contain" />
        </div>
      </section>

      {/* LIVE EARNINGS COUNTER */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Chat Operators Earned So Far</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto text-gray-800">
          <div className="text-4xl md:text-5xl font-bold text-blue-600">
            $<span id="totalEarnings">0</span>
          </div>
          <div className="text-lg md:text-xl">
            <p>Total Earnings Distributed</p>
            <p className="text-gray-500">Since platform launch</p>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO */}
   {/* HOW IT WORKS */}
<section id="how" className="py-20 px-6 bg-white text-center">
  <h2 className="text-3xl font-bold mb-12">See How It Works</h2>

  <div className="max-w-4xl mx-auto">
    <video
       source src="/texting-factory-video-girl-1.mp4" type="video/mp4"/>
      controls
      autoPlay
      muted
      loop
      playsInline
      className="w-full rounded-2xl shadow-lg"
    
      Your browser does not support the video tag.
    <var>video</var>
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
