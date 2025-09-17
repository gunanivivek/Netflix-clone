import React from 'react'

const HeroSection:React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center text-white px-4 min-h-screen">
      {/* Content */}
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Unlimited movies, TV shows and more
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center ml-20 mt-6 gap-3 w-full max-w-xl justify-center">
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 px-4 py-4 text-lg rounded-md bg-transparent border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white w-[80%] sm:w-[60%]"
          />
          <button className="px-6 py-4 bg-red-600 hover:bg-red-700 text-lg font-semibold text-white rounded-md transition w-[80%] sm:w-auto">
            Get Started
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="w-full h-[40px]"
        >
          <defs>
            {/* Red gradient stroke */}
            <linearGradient id="fadeStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e50914" stopOpacity="0" />
              <stop offset="50%" stopColor="#e50914" stopOpacity="1" />
              <stop offset="100%" stopColor="#e50914" stopOpacity="0" />
            </linearGradient>

            {/* Subtle Blue Glow */}
            <radialGradient id="blueGlow" cx="50%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#0b84ff" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#0b84ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Visible curved red line */}
          <path
            d="M0,10 C25,2 75,2 100,10"
            stroke="url(#fadeStroke)"
            strokeWidth="2"
            fill="transparent"
          />

          {/* Blue glow under the curve */}
          <path
            d="M0,10 C25,2 75,2 100,10 L100,20 L0,20 Z"
            fill="url(#blueGlow)"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection