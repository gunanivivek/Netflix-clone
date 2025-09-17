import React, { useState } from "react";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Password: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const navigate = useNavigate();

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!user?.email) {
      setError("No user logged in.");
      return;
    }

    if (newPassword.length <= 6) {
      setError("New Password length should be greater than 6");
      return;
    }

    if (newPassword != confirmPassword) {
      setError("New password and confirm password does not match");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);

      setSuccess("Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="flex-grow flex justify-center items-start pt-16">
        <div className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-md border">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Change Password
          </h2>
          <h4 className="font-semibold text-xl text-gray-600 mb-8">
            Protect your account with a unique password at least 6 characters
            long.
          </h4>

          <form onSubmit={handlePasswordChange} className="space-y-6">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <div>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                placeholder="Current password"
                className="w-full text-black px-4 py-4 border rounded-md focus:outline-none focus:ring focus:ring-black"
              />
              <p className="text-sm text-blue-800 underline py-1">
                <a href="/resetpassword">Forgot Password?</a>
              </p>
            </div>

            <div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="New password (6 - 60 characters)"
                className="w-full px-4 py-4 text-black border rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>

            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Re-enter new password"
                className="w-full px-4 py-4 border text-black rounded-md focus:outline-none focus:ring focus:ring-black "
              />
            </div>
            <fieldset className="fieldset rounded-box w-full py-1">
              <label className="label text-[18px] font-semibold text-black">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                Sign out of all devices
              </label>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-4 rounded-md hover:bg-gray-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-transparent text-black font-bold py-4 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
