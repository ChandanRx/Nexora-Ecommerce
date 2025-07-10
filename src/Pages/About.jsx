import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#3a3d41] text-[#C5C6C7] py-10 px-4 sm:px-6 lg:px-20 font-[Poppins]">
      <div className="max-w-5xl mx-auto bg-[#101820] border border-[#86C232] rounded-2xl shadow-lg p-8 space-y-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
          About Jalvix
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base">
          Welcome to <span className="font-semibold text-[#86C232]">Jalvix</span>, your one-stop destination for the latest and greatest in electronics.
          From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
        </p>

        {/* Mission Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p>
            At Jalvix, our mission is to make innovative technology accessible to everyone.
            We’re passionate about connecting people with the tools and tech they need to thrive in a digital world —
            all at competitive prices and delivered with speed and care.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose Jalvix?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p>
            We envision a future where technology elevates everyday life.
            At Jalvix, we’re committed to staying ahead of the curve,
            offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Join the Jalvix Family
          </h3>
          <p className="mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Jalvix has something for everyone.
          </p>
          <Link to="/products">
            <button className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] px-6 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
