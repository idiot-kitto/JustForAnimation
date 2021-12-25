import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Rain, Cube } from "./pages";

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/rain" element={<Rain />} />
        <Route path="/cube" element={<Cube />} />
      </Routes>
    </Router>
  );
};

export default App;
