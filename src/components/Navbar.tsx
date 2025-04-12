'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Material', href: '/material' },
    { label: 'Classes', href: '/classes' },
  ];

  return (
    <header className="bg-[#004ea1] shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="The Study Campus logo"
            width={40}
            height={40}
            className="rounded-full p-1"
          />
          <span className="text-lg font-semibold">The Study Campus</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:underline hover:text-gray-200 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-[#004ea1] text-white text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block w-full py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
