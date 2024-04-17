import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import FindAstrologers from './pages/FindAstrologers';
import HoroscopeReading from './pages/servicesPages/HoroscopeReading';
import LoginPage from './pages/LoginPage';
import AstrologerDetailsPage from './pages/AstrologerDetailsPage';
import Footer from './Components/Footer/Footer';
import AstrologicalChartPage from './pages/servicesPages/AstrologicalChartPage';
import AstrologicalEventsPage from './pages/servicesPages/AstrologicalEventsPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/"element={<LoginPage />} />
            <Route path="/findAstrologers" element={<FindAstrologers />} />
            <Route path="/horoscopeReading" element={<HoroscopeReading />} />
            <Route path="/astrologer/:id" element={<AstrologerDetailsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/astrologicalChart' element={<AstrologicalChartPage />} />
            <Route path='astrologicalEvents' element={<AstrologicalEventsPage />} />
          </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
