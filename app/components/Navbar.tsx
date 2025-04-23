'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-4 h-4 bg-[#F7C94A] mr-2"></div>
              <span className="text-xl font-bold">charity: water</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium uppercase">
                Take Action
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium uppercase">
                About Us
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium uppercase">
                Why Water?
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium uppercase">
                Sign In
              </button>
              <button className="bg-[#F7C94A] hover:bg-[#e5b843] px-6 py-2 text-sm font-medium uppercase rounded-md">
                Give £
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-base font-medium uppercase">
              Take Action
            </Link>
            <Link href="#" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-base font-medium uppercase">
              About Us
            </Link>
            <Link href="#" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-base font-medium uppercase">
              Why Water?
            </Link>
            <button className="block w-full text-left text-gray-900 hover:text-gray-700 px-3 py-2 text-base font-medium uppercase">
              Sign In
            </button>
            <button className="block w-full text-left bg-[#F7C94A] hover:bg-[#e5b843] px-3 py-2 text-base font-medium uppercase rounded-md">
              Give £
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 