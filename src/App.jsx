
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from '@/components/Header.jsx';
import HomePage from '@/pages/HomePage.jsx';
import Footer from '@/components/Footer.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="dark">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
