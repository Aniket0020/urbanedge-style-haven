
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="urban-container flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl tracking-tight">
          URBAN<span className="text-edge-600">EDGE</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#collections" className="link-underline text-sm font-medium">COLLECTIONS</a>
          <a href="#about" className="link-underline text-sm font-medium">ABOUT</a>
          <a href="#lookbook" className="link-underline text-sm font-medium">LOOKBOOK</a>
          <a href="#journal" className="link-underline text-sm font-medium">JOURNAL</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:text-edge-600 transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
          
          <button 
            className="md:hidden p-1 hover:text-edge-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 h-full">
          <a 
            href="#collections" 
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            COLLECTIONS
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <a 
            href="#lookbook" 
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            LOOKBOOK
          </a>
          <a 
            href="#journal" 
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            JOURNAL
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
