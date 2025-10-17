import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("authUser");
      if (stored) setUser(JSON.parse(stored));
    } catch (e) {
      // ignore
    }
  }, []);

  const login = (username, password) => {
    // Demo credentials (for learning only)
    if (username === "admin" && password === "password123") {
      const u = { username };
      setUser(u);
      localStorage.setItem("authUser", JSON.stringify(u));
      return { success: true };
    }
    return { success: false, message: "Invalid username or password." };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
