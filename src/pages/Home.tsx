import FAQSection from "@/components/HomePageComp/FAQSection";
import HeroSection from "@/components/HomePageComp/HeroSection";
import MoreReasons from "@/components/HomePageComp/MoreReasons";
import TrendingComp from "@/components/HomePageComp/TrendingComp";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { RootState } from "@/store/ProStore";
import React from "react";

const Home: React.FC = () => {
  const lang = useAppSelector((state: RootState) => state.language.code);
  return (
    <>
      <HeroSection />
      <div className="bg-black px-4 sm:px-8">
        <TrendingComp />
        <MoreReasons />
        <FAQSection />
        <div className="flex flex-col items-center justify-center mt-5 w-full gap-6 px-4 sm:px-6">
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white max-w-2xl leading-relaxed">
            {lang === "en" &&
              "Ready to watch? Enter your email to create or restart your membership."}
            {lang === "hi" &&
              "देखने के लिए तैयार हैं? अपनी ईमेल दर्ज करें और सदस्यता शुरू या पुनः प्रारंभ करें।"}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl">
            <input
              type="text"
              placeholder="Email address"
              className="flex-1 w-full sm:w-auto px-4 py-3 sm:py-4 border border-gray-500 text-base sm:text-lg lg:text-xl rounded-md bg-gray-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="flex items-center hover:cursor-pointer justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-base sm:text-lg lg:text-xl font-medium text-white rounded-md transition whitespace-nowrap">
              {lang === "en" && "Get Started"}
              {lang === "hi" && "शुरू करें"}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 ml-1"
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
