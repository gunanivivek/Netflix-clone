import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        {/* Questions line */}
        <div className="mb-6">
          <span>Questions? Call </span>
          <a href="tel:000-800-919-1694" className="hover:underline">
            000-800-919-1694
          </a>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Ways to Watch</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Language selector */}
        <div className="mb-6">
          <select
            className="bg-black text-gray-400 border border-gray-600 px-2 py-1 rounded focus:outline-none"
            defaultValue="English"
          >
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        {/* Bottom text */}
        <div className="text-xs text-gray-500">Netflix India</div>
      </div>
    </footer>
  );
};

export default Footer;
