import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon, PhoneIcon, TruckIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-stone-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>Call us: (855) 123-4567</span>
          </div>
          <div className="flex items-center">
            <TruckIcon className="h-4 w-4 mr-2" />
            <span>Free delivery on orders over $500</span>
          </div>
        </div>
      </div>
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-stone-800">
                <span className="text-amber-600">T</span>amab
              </div>
            </div>
          </Link>
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-grow mx-8 relative">
            <input type="text" placeholder="Search for materials, tools..." className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-amber-600">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1 bg-amber-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                3
              </span>
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-amber-600">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 text-gray-700">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-8 right-16 bg-amber-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                3
              </span>
            </Link>
            <button onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile search - visible only on mobile */}
        <div className="mt-4 md:hidden relative">
          <input type="text" placeholder="Search for materials, tools..." className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Navigation bar */}
      <nav className="bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <ul className="flex space-x-8 py-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-amber-600 font-medium">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/products?category=building" className="text-gray-700 hover:text-amber-600 font-medium">
                  Building Materials
                </Link>
              </li>
              <li>
                <Link to="/products?category=tools" className="text-gray-700 hover:text-amber-600 font-medium">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/products?category=plumbing" className="text-gray-700 hover:text-amber-600 font-medium">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/products?category=paint" className="text-gray-700 hover:text-amber-600 font-medium">
                  Paint
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-700 hover:text-amber-600 font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-3 py-3">
              <li>
                <Link to="/" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/products?category=building" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Building Materials
                </Link>
              </li>
              <li>
                <Link to="/products?category=tools" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/products?category=plumbing" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/products?category=paint" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Paint
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-2">
                <Link to="/login" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/account" className="block text-gray-700 hover:text-amber-600 font-medium py-1" onClick={toggleMenu}>
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>}
    </header>;
};
export default Header;