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
          <p className="hover:underline">FAQ</p>
          <p className="hover:underline">Help Center</p>
          <p className="hover:underline">Account</p>
          <p className="hover:underline">Media Center</p>
          <p className="hover:underline">Investor Relations</p>
          <p className="hover:underline">Jobs</p>
          <p className="hover:underline">Ways to Watch</p>
          <p className="hover:underline">Terms of Use</p>
          <p className="hover:underline">Privacy</p>
          <p className="hover:underline">Cookie Preferences</p>
          <p className="hover:underline">Corporate Information</p>
          <p className="hover:underline">Contact Us</p>
        </div>

        {/* Language selector */}
        

        {/* Bottom text */}
        <div className="text-xs text-gray-500">Netflix India</div>
      </div>
    </footer>
  );
};

export default Footer;
