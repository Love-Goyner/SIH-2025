import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Train Traffic Control</h1>
        <p className="text-sm text-slate-500 mb-6">Sign in to access section controller tools.</p>
        <input className="w-full border px-3 py-2 rounded mb-3" placeholder="Username (e.g. controller1)" />
        <input className="w-full border px-3 py-2 rounded mb-4" placeholder="Password" type="password" />
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full py-2 rounded bg-sky-600 text-white font-medium"
        >
          Sign in
        </button>
        <p className="text-xs text-slate-400 mt-4">Demo build — uses mock data for visualization.</p>
        <p className="text-xs text-slate-400 mt-4">
          Create an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-600 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
