import React, { useState } from "react";
import { Info, CreditCard, Tv, Settings, AlertCircle, Phone } from "lucide-react";

const Help: React.FC = () => {
    const [support, setSupport] = useState("")
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-15 px-4 text-black">
      {/* Hero / Search */}
      <section className="text-center mb-12 w-full">
        <h2 className="text-2xl font-medium mb-4">Hi, how can we help?</h2>
        <div className="flex justify-center">
          <input
            type="text"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            placeholder="Type a question..."
            className="w-full max-w-lg border border-gray-400 p-3 rounded-l outline-none"
          />
          <button className="bg-red-600 text-white px-5 py-3 rounded-r" onClick={() => setSupport("")}>
            Search
          </button>
        </div>
      </section>

      {/* Help Topics */}
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <Info className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Getting Started</h3>
            <p className="text-gray-700 text-sm">
              Learn how to sign up and start watching your favorite shows.
            </p>
          </div>
        </div>

        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <CreditCard className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Billing & Payments</h3>
            <p className="text-gray-700 text-sm">
              Manage your payment methods, view charges, and update billing info.
            </p>
          </div>
        </div>

        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <Tv className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Watching Netflix</h3>
            <p className="text-gray-700 text-sm">
              Devices you can use, internet requirements, and playback settings.
            </p>
          </div>
        </div>

        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <Settings className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Account Settings</h3>
            <p className="text-gray-700 text-sm">
              Change your password, update profile info, and manage preferences.
            </p>
          </div>
        </div>

        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <AlertCircle className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Troubleshooting</h3>
            <p className="text-gray-700 text-sm">
              Fix streaming issues, errors, and other common problems.
            </p>
          </div>
        </div>

        <div className="border rounded p-6 hover:shadow-lg cursor-pointer flex items-start gap-4">
          <Phone className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-gray-700 text-sm">
              Get in touch with Netflix Support for further assistance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
