import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚂 Fake signup logic (later replace with backend)
    alert(`Welcome aboard, ${form.name || form.username}! 🎉`);
    navigate("/"); // after signup, go to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
        <p className="text-sm text-slate-500 mb-6">
          Sign up to access section controller tools.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-3"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-3"
            required
          />
          <input
            name="username"
            placeholder="Username (e.g. controller1)"
            value={form.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-3"
            required
          />
          <input
            name="sectionid"
            placeholder="Section ID"
            value={form.sectionid}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-3"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full py-2 rounded bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-xs text-slate-400 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-600 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
