
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="font-bold text-xl text-gray-900">URBAN</a>
            <p className="mt-4 text-gray-600">
              Quality essentials for the modern lifestyle.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Bestsellers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Collections</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Materials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Store Locations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900">Customer Care</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>&copy; 2023 Urban. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
