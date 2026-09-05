"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMsg, setResetMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("");
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setIsLoading(false);
    if (error) {
      if (error.message.toLowerCase().includes("confirm")) {
        setMsg("Please confirm your email before logging in.");
      } else {
        setMsg("Invalid email or password.");
      }
    } else {
      router.push("/dashboard");
    }
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResetMsg("");
    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetMsg("Please enter a valid email address.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);
    if (error) {
      setResetMsg("An error occurred: " + error.message);
    } else {
      setResetMsg("A password reset link has been sent to your email if it is registered.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {msg && <div className="text-center text-sm text-red-600">{msg}</div>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-600 text-white py-2 rounded font-bold hover:bg-amber-700 transition"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
        <button
          type="button"
          className="text-xs text-amber-700 hover:underline mt-1"
          onClick={() => setShowReset(!showReset)}
        >
          Forgot Password?
        </button>
        {showReset && (
          <form onSubmit={handleResetPassword} className="mt-2 mb-2 p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-700">Enter your email to reset your password:</label>
            <input
              type="email"
              value={resetEmail}
              onChange={e => setResetEmail(e.target.value)}
              placeholder="your@email.com"
              className="border rounded px-2 py-1 text-sm"
              required
            />
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white rounded px-3 py-1 text-xs font-bold mt-1">Send Reset Link</button>
            {resetMsg && <div className="text-xs text-center mt-1" style={{color: resetMsg.startsWith('A password reset link') ? 'green' : 'red'}}>{resetMsg}</div>}
          </form>
        )}
        <div className="text-center text-sm">
          Don't have an account? <a href="/register" className="text-amber-600 font-semibold">Register here</a>
        </div>
        <div className="text-center text-sm pt-2 border-t border-gray-200">
          <a href="/admin-login" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
            Admin Login →
          </a>
        </div>
      </form>
    </div>
  );
} 