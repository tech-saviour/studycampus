'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Material', href: '/material' },
  { label: 'Classes', href: '/classes' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#004ea1] shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="The Study Campus logo"
            width={40}
            height={40}
            className="rounded-full p-1 bg-white"
          />
          <span className="text-lg font-semibold">The Study Campus</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`transition-all px-2 py-1 rounded ${
                  pathname === href
                    ? 'bg-white text-[#004ea1]'
                    : 'hover:bg-white/10 hover:text-gray-100'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden transition-transform duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Slide-in Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#004ea1] text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block w-full py-2 px-2 rounded ${
                  pathname === href
                    ? 'bg-white text-[#004ea1]'
                    : 'hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
