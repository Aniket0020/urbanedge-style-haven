
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="urban-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-6">
            <a href="#" className="font-display font-bold text-2xl tracking-tight inline-block">
              URBAN<span className="text-edge-600">EDGE</span>
            </a>
            <p className="text-urban-500 max-w-xs">
              Contemporary urban clothing for those who define their own aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-urban-600 hover:text-edge-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-urban-600 hover:text-edge-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-urban-600 hover:text-edge-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-urban-600 hover:text-edge-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Bestsellers</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Collections</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Accessories</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Our Story</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Materials</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Journal</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Store Locations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-urban-500 hover:text-edge-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-urban-500 text-sm">
          <p>&copy; 2023 UrbanEdge. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-edge-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-edge-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-edge-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
