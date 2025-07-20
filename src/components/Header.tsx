import { useState } from 'react';
import { Menu, X, Phone, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { state, dispatch } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCartClick = () => {
    if (state.items.length > 0) {
      setIsCheckoutOpen(true);
    } else {
      dispatch({ type: 'TOGGLE_CART' });
    }
  };

  // Product categories data
  const categories = [
    { name: "Gel Polish", href: "#gel-polish" },
    { name: "Nail Art", href: "#nail-art" },
    { name: "Nail Tools", href: "#nail-tools" },
    { name: "Nail Care", href: "#nail-care" },
    { name: "Nail Kits", href: "#nail-kits" }
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-pink-600">
                💅 Nails by Solace
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              
              {/* Categories Dropdown */}
              <div className="relative group">
                <button 
                  onClick={toggleCategories}
                  className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <span>Categories</span>
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${isCategoriesOpen ? 'block' : 'hidden'}`}
                >
                  {categories.map((category) => (
                    <a
                      key={category.href}
                      href={category.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                <span>+234 907 758 7619</span>
              </div>
              <button
                onClick={handleCartClick}
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={handleCartClick}
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <nav className="py-4 space-y-2">
                <a href="#home" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">Home</a>
                
                {/* Mobile Categories Dropdown */}
                <div className="relative">
                  <button 
                    onClick={toggleCategories}
                    className="flex items-center w-full py-2 text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span>Categories</span>
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    className={`pl-4 ${isCategoriesOpen ? 'block' : 'hidden'}`}
                  >
                    {categories.map((category) => (
                      <a
                        key={category.href}
                        href={category.href}
                        className="block py-2 text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a href="#products" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">Products</a>
                <a href="#about" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">About</a>
                <a href="#gallery" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">Gallery</a>
                <a href="#testimonials" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">Testimonials</a>
                <a href="#contact" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default Header;