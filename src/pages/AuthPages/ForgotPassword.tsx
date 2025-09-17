import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [method, setMethod] = useState("email");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (method !== "email") {
      setError("Currently, only Email reset is supported.");
      return;
    }

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "We have sent you an email with the instructions to reset your password"
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col bg-[url('/AAAAAScyGMgUWk6v1RyiD6aiF3q8jELFh0hzbzYEyo0f-s-_TVtoEZRM1L-qGnR_3Oen.jpg')] bg-cover bg-ring">
      <div className="flex-grow flex justify-center items-center pt-10 sm:pt-16 px-2">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white p-5 sm:p-10 shadow border">
          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-6">
            Update password, email or phone
          </h1>
          <p className="text-gray-800 font-light text-base sm:text-lg mb-6">
            How would you like to reset your password?
          </p>

          <div className="space-y-4 mb-6">
            <label className="flex items-center gap-3 text-base sm:text-lg font-light cursor-pointer">
              <input
                type="radio"
                value="email"
                checked={method === "email"}
                onChange={(e) => setMethod(e.target.value)}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-800">Email</span>
            </label>
            <label className="flex items-center gap-3 text-base sm:text-lg font-light cursor-pointer opacity-50">
              <input
                type="radio"
                value="phone"
                disabled
                onChange={(e) => setMethod(e.target.value)}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-800">Text Message (Coming Soon)</span>
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleResetPassword} className="space-y-6">
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-600">{message}</p>}
            <p className="text-black text-base sm:text-lg font-light">
              We will send you an email with instructions on how to reset your password.
            </p>
            {method === "email" && (
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="w-full placeholder:text-lg text-black px-4 py-4 border rounded-md focus:outline-none focus:border-none focus:ring focus:ring-red-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-bold"
            >
              Email me
            </button>
          </form>

          {/* Back link */}
          <p className="mt-6 text-base sm:text-lg text-center font-semibold text-gray-600 underline">
            <a href="/login" className="text-gray-800 hover:underline">
              I can't remember my email address or phone number.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
