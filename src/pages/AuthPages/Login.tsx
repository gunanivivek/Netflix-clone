import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { login } from "@/features/auth/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Centered form */}
      <div className="flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/60 text-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-lg p-6 sm:p-10 rounded-md shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border-2 text-base sm:text-[17px] border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 bg-transparent border-2 text-base sm:text-[17px] border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-white pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-base sm:text-[17px] text-white font-bold py-3 rounded-md"
            >
              Sign In
            </button>
          </form>

          <p className="text-gray-400 mt-5 font-bold w-full text-base sm:text-[17px] text-center">
            OR
          </p>
          <p className="bg-[rgba(128,128,128,0.4)] w-full hover:bg-[rgba(128,128,128,0.2)] transition text-white text-center font-bold text-base sm:text-[17px] py-3 rounded-md mt-4">
            <a href="/signup" className="text-white">
              Use a sign-in code
            </a>
          </p>
          <p className="text-gray-400 mt-5 text-center">
            <Link
              to="/resetpassword"
              className="text-white underline font-semibold text-base sm:text-[17px] hover:text-gray-400"
            >
              Forgot Password?
            </Link>
          </p>
          <fieldset className="w-full py-4 mt-4">
            <label className="flex items-center gap-2 text-base sm:text-[18px] font-semibold text-white">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
              Remember me
            </label>
          </fieldset>
          <p className="text-gray-400 text-base sm:text-[17px] font-semibold mt-1">
            {"New to Netflix? "}
            <Link
              to="/signup"
              className="text-white font-bold hover:text-gray-400 cursor-pointer"
            >
              Sign up now
            </Link>
          </p>
          <p className="text-gray-400 font-semibold text-xs sm:text-sm mt-7 w-full">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <br />
            The information collected by Google reCAPTCHA is subject to the{" "}
            <a href="/" className="text-blue-500">
              Google Privacy Policy{" "}
            </a>
            and
            <a href="/" className="text-blue-500 hover:cursor-pointer">
              {" "}
              Terms of Service{" "}
            </a>
            , and is used for providing, maintaining, and improving the reCAPTCHA
            service and for general security purposes (it is not used for
            personalised advertising by Google)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
