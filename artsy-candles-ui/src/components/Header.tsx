"use client";

import React, { useState, useEffect } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Artsy Candles</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Products</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contact</a></li>
          </ul>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
