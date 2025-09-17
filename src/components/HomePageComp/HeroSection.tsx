import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { RootState } from "@/store/ProStore";

const HeroSection: React.FC = () => {
  const lang = useAppSelector((state: RootState) => state.language.code);
  return (
    <section className="relative flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 min-h-screen">
  {/* Content */}
  <div className="w-full max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
      {lang === "en" && "Unlimited movies, TV shows and more"}
      {lang === "hi" && "अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ"}
    </h2>

    <p className="mt-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
      {lang === "en" && "Starts at ₹149. Cancel at any time."}
      {lang === "hi" && "₹149 से शुरू। कभी भी रद्द करें।"}
    </p>

    <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
      {lang === "en" &&
        "Ready to watch? Enter your email to create or restart your membership."}
      {lang === "hi" &&
        "देखने के लिए तैयार हैं? अपनी ईमेल दर्ज करें और सदस्यता शुरू या पुनः प्रारंभ करें।"}
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row items-center mt-6 gap-3 w-full max-w-xl mx-auto justify-center">
      <input
        type="text"
        placeholder={lang === "en" ? "Email address" : "ईमेल पता"}
        className="flex-1 px-4 py-3 sm:py-4 text-base sm:text-lg rounded-md bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-[60%]"
      />
      <button className="px-6 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-base sm:text-lg font-semibold text-white rounded-md transition w-full sm:w-auto">
        {lang === "en" && "Get Started"}
        {lang === "hi" && "शुरू करें"}
      </button>
    </div>
  </div>

  {/* SVG Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none h-12 sm:h-16">
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="fadeStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e50914" stopOpacity="0" />
          <stop offset="50%" stopColor="#e50914" stopOpacity="1" />
          <stop offset="100%" stopColor="#e50914" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="blueGlow" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#0b84ff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#0b84ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <path
        d="M0,10 C25,2 75,2 100,10"
        stroke="url(#fadeStroke)"
        strokeWidth="2"
        fill="transparent"
      />
      <path
        d="M0,10 C25,2 75,2 100,10 L100,20 L0,20 Z"
        fill="url(#blueGlow)"
      />
    </svg>
  </div>
</section>

  );
};

export default HeroSection;
