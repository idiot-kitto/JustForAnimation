import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AlertModal from './components/AlertModal';
import { Home, Rain, Cube, Loading, Button, Search } from './pages';

const App = () => {
  return (
    <RecoilRoot>
      <AlertModal />
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/rain" element={<Rain />} />
          <Route path="/cube" element={<Cube />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/button" element={<Button />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
