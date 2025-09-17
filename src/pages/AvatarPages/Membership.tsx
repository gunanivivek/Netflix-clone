import Sidebar from "@/components/Sidebar";
import React from "react";

const Membership: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col sm:flex-row justify-center py-5 sm:py-20 px-4">
      {/* Sidebar on left for desktop, on top for mobile */}
      <div className="sm:w-64 w-full mb-6 sm:mb-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl space-y-8 mt-3">
        {/* Section Title */}
        <div>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Membership</h1>
          <p className="text-gray-800 font-semibold mt-1 text-xl">
            Plan Details
          </p>
        </div>

        {/* Plan Details */}
        <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
          {/* Gradient top bar */}
          <div className="h-2 bg-gradient-to-r from-[#10309a] via-[#152a98] to-[#4f68f7]" />

          {/* Card content */}
          <div className="px-6 py-4">
            <h2 className="text-xl text-black font-semibold">Mobile plan</h2>
            <p className="text-xl text-gray-600">
              Watch ad-free on your phone or tablet. Download content to 1
              device.
            </p>
          </div>

          <div className="border-t px-6 py-4">
            <button className="text-xl font-semibold text-black hover:underline">
              Change plan
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div>
          <h3 className="text-black mb-4 font-sans">Payment Info</h3>

          <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-black">Next payment</h2>
              <p className="text-lg text-gray-600 mt-1">30 September 2025</p>

              <div className="flex items-center mt-1 space-x-2">
                {/* Payment Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e64a19"
                    d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927	c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789	C48.176,19.325,46.819,14.262,42.858,11.975z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275	c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59	C38.261,20.727,37.523,17.968,35.365,16.723z"
                  ></path>
                  <path
                    fill="#43a047"
                    d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317	c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86	c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03	c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596	l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"
                  ></path>
                </svg>
                <span className="text-gray-800 text-lg font-semibold">
                  d•••@okaxis
                </span>
              </div>
            </div>

            <div className="divide-y divide-gray-300">
              <button className="w-full text-left text-xl px-6 py-4 border-t-gray-600 font-semibold text-black hover:underline">
                Manage payment method
              </button>
              <button className="w-full text-left px-6 py-4 text-xl font-semibold text-black hover:underline">
                Redeem gift or promo code
              </button>
              <button className="w-full text-left px-6 py-4 text-xl font-semibold text-black hover:underline">
                View Payment History
              </button>
            </div>
          </div>
        </div>

        <button className="border border-gray-300 px-4 py-2 text-red-800 font-semibold text-lg w-full text-center hover:bg-gray-200">
          Cancel Membership
        </button>
      </div>
    </div>
  );
};

export default Membership;
