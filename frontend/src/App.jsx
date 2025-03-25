import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import QuestionBankPage from "./pages/QuestionBankPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/question-bank" element={<QuestionBankPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
