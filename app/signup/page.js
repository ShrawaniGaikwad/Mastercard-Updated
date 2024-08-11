"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      router.push("/home");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use. Redirecting to login page...');
        setTimeout(() => {
          router.push("/login"); 
        }, 2000);
      } else {
        console.error("Error signing up:", error);
        setError(error.message);
      }
    }
  };
  

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="password"
              id="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <button
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:from-green-600 hover:to-blue-700"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <a
              className="text-sm font-medium text-green-600 hover:text-green-700"
              href="/login"
            >
              Already an User ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}




// npm install -g firebase-tools

// firebase login

// firebase init

// firebase deploy