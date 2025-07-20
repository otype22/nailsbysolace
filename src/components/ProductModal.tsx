import React, { useState } from 'react';
import { X, Star, Plus, Minus, Heart } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { dispatch } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    dispatch({ type: 'OPEN_CART' });
    onClose();
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price).replace('NGN', '₦');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              
             <div className="flex items-center mb-4">
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={`${product.id}-star-${i}`}  // Unique key combining product ID and star position
        className={`h-5 w-5 ${
          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
  <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
</div>
              
              <div className="text-3xl font-bold text-pink-600 mb-6">
                {formatPrice(product.price)}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="text-gray-600">{product.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Size:</span>
                  <span className="text-gray-600">{product.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Ingredients:</span>
                  <span className="text-gray-600">{product.ingredients}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-600">{product.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlist}
                  className={`px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                    isWishlisted
                      ? 'border-pink-500 bg-pink-50 text-pink-600'
                      : 'border-gray-300 text-gray-600 hover:border-pink-500 hover:text-pink-600'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;