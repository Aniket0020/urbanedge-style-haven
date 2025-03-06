
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-bold text-xl text-gray-900">URBAN</a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-gray-600 hover:text-gray-900">Collections</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#journal" className="text-gray-600 hover:text-gray-900">Journal</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#collections" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Collections</a>
            <a href="#about" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#journal" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Journal</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
