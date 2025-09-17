import FAQSection from "@/components/HomePageComp/FAQSection";
import HeroSection from "@/components/HomePageComp/HeroSection";
import MoreReasons from "@/components/HomePageComp/MoreReasons";
import TrendingComp from "@/components/HomePageComp/TrendingComp";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-black px-4 sm:px-8">
        <TrendingComp />
        <MoreReasons />
        <FAQSection />
        <div className="flex flex-col items-center justify-center mt-5 w-full gap-4">
          <p className="text-base sm:text-lg md:text-xl font-light text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Email address"
              className="w-full sm:w-[28rem] md:w-[36rem] px-4 py-3 sm:py-4 border border-gray-500 text-base sm:text-lg rounded-md bg-gray-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 bg-red-600 hover:bg-red-700 text-base sm:text-lg font-medium text-white rounded-md transition whitespace-nowrap">
              Get Started
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
