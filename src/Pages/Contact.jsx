import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#3a3d41] flex items-center justify-center px-4 py-6 font-[Poppins] text-[#C5C6C7]">
      <div className="bg-[#101820] border border-[#86C232] rounded-2xl shadow-lg p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch with Nexora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#86C232]">Contact Info</h3>
              <p className="text-sm text-[#C5C6C7]">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div className="text-sm space-y-1">
              <p><strong className="text-[#86C232]">📍 Address:</strong> 123 Tech Lane, Kolkata, India</p>
              <p><strong className="text-[#86C232]">📧 Email:</strong> support@nexora.com</p>
              <p><strong className="text-[#86C232]">📞 Phone:</strong> +91 98765 43210</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-[#b7ff53]">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#86C232]/40 text-[#C5C6C7] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-[#b7ff53]">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#86C232]/40 text-[#C5C6C7] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-[#b7ff53]">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#86C232]/40 text-[#C5C6C7] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold py-2 rounded-xl hover:scale-105 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
