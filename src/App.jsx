import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Course/Course";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import Notes from "./pages/Resources/Notes/Notes";
import Quizzes from "./pages/Resources/Quizzes/Quizzes";
import { AuthProvider } from "./context/AuthContext";
import React from "react";

function AppContent() {
  const location = useLocation();
  const hideShell = location.pathname === "/login";

  return (
    <>
      {!hideShell && <NavBar />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources/notes" element={<Notes />} />
          <Route path="/resources/quizzes" element={<Quizzes />} />
        </Routes>
      </main>
      {!hideShell && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
