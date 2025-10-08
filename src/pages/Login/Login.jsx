import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate login (replace with real auth logic)
    alert("Logged in!");
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Access your account to continue learning.
        </p>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="login-input"
          value={form.email}
          onChange={handleChange}
          autoFocus
          required
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="login-input"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
