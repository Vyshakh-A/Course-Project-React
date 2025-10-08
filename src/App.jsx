import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Course/Course";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import Notes from "./pages/Resources/Notes/Notes";
import Quizzes from "./pages/Resources/Quizzes/Quizzes";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources/notes" element={<Notes />} />
        <Route path="/resources/quizzes" element={<Quizzes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
