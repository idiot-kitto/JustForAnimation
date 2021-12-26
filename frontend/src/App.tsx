import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Rain, Cube, Loading } from "./pages";

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/rain" element={<Rain />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
};

export default App;
