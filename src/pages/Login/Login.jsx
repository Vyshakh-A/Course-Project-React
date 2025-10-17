import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError("Please enter username and password.");
      return;
    }
    const res = auth.login(form.username.trim(), form.password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.message || "Login failed.");
    }
  };

  return (
    <div className="login-page">
      <form
        className="login-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        aria-label="Login form"
      >
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Access your learning dashboard.</p>

        <label htmlFor="username" className="login-label">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className="login-input"
          value={form.username}
          onChange={handleChange}
          autoFocus
          required
          aria-required="true"
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
          aria-required="true"
        />

        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        <button type="submit" className="login-btn">
          Login
        </button>

        <div
          style={{
            marginTop: 8,
            fontSize: 13,
            color: "#666",
            textAlign: "center",
          }}
        >
          Demo: <strong>admin</strong> / <strong>password123</strong>
        </div>
      </form>
    </div>
  );
};

export default Login;
