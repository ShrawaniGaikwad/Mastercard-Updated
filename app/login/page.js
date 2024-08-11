"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";  

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      router.push("/home");
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          {isResettingPassword ? "Reset Your Password" : "Welcome Back"}
        </h2>
        <form onSubmit={isResettingPassword ? handleForgotPassword : handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {isResettingPassword && (
            <div className="mb-8">
              <p className="text-gray-700 text-sm mb-2">
                Enter your email to receive a password reset link.
              </p>
            </div>
          )}
          {!isResettingPassword && (
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-sm mb-4">
              {successMessage}
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <button
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:from-green-600 hover:to-blue-700"
              type="submit"
            >
              {isResettingPassword ? 'Reset Password' : 'Log In'}
            </button>
          </div>
          <div className="text-center">
            <a
              className="text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer"
              onClick={() => setIsResettingPassword(!isResettingPassword)}
            >
              {isResettingPassword ? 'Back to Login' : 'Forgot Password?'}
            </a>
            <br></br>
            <a
              className="text-sm font-medium text-green-600 hover:text-green-700"
              href="/signup"
            >
               Not an User ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
