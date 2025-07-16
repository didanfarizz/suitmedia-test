// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './components/navbar';
import Hero from './components/hero'; 
import './index.css'; // 

// Definisi links yang akan dibagi ke Navbar dan Hero
const appLinks = [
  { id: 1, label: 'Work', link: '/work' },
  { id: 2, label: 'About', link: '/about' },
  { id: 3, label: 'Services', link: '/services' },
  { id: 4, label: 'Ideas', link: '/ideas' }, 
  { id: 5, label: 'Careers', link: '/careers' },
  { id: 6, label: 'Contact', link: '/contact' },
];

// Komponen Pembungkus untuk mengelola useLocation
const AppContent = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]); 


  const IdeasPage = () => <div className="p-8 text-xl mt-20">Halaman List Ide</div>;

  return (
    <>
      <Navbar links={appLinks} activePath={activePath} />
      <Hero links={appLinks} activePath={activePath} />

      <main className="container mx-auto px-4 py-8" style={{ paddingTop: '100px' }}>
        <Routes>
          
          {appLinks.map(link => (
            <Route key={link.id} path={link.link} element={
              
              link.link === '/ideas' ? <IdeasPage /> : <div className="p-8 text-xl">Halaman {link.label}</div>
            } />
          ))}
          
          <Route path="/" element={<div className="p-8 text-xl">Selamat Datang di Beranda!</div>} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent /> 
      </div>
    </Router>
  );
}

export default App;