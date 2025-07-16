// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = ({ links, activePath }) => {
  const [heroText, setHeroText] = useState('Selamat Datang'); 

  useEffect(() => {
    
    const currentLink = links.find(link => {
      if (link.link === '/') {
        return activePath === '/';
      }
      return activePath.startsWith(link.link);
    });

   
    setHeroText(currentLink ? currentLink.label : 'Selamat Datang');
  }, [activePath, links]); 
  

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
    >
      <div className="absolute inset-0">
        <img src="banner.jpg" alt="hero" width={100} height={100} className='w-full h-full'/></div> 
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {heroText}
        </h1>
        <p className="text-xl md:text-2xl">
          Slogan atau deskripsi terkait dengan halaman ini
        </p>
      </div>
    </div>
  );
};

export default Hero;