import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2025 TextingFactory. All rights reserved.</p>
        <p>
          <a href="/terms" className="underline">Terms of Service</a> |{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
