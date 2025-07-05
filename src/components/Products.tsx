import React, { useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';
import ProductModal from './ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatch } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Gel Nail Polish Set",
      description: "Premium long-lasting gel polish set with 6 vibrant colors and top coat",
      price: 12500,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
      type: "Gel Polish",
      size: "6 x 10ml",
      ingredients: "Non-toxic, vegan formula",
      duration: "3 weeks",
      rating: 4.7,
      reviews: 128
    },
    {
      id: 2,
      name: "Nail Art Stickers Pack",
      description: "100 unique nail art stickers for creative designs",
      price: 4500,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
      type: "Decals",
      size: "100 pieces",
      ingredients: "Waterproof adhesive",
      duration: "N/A",
      rating: 4.3,
      reviews: 76
    },
    {
      id: 3,
      name: "Professional Nail Kit",
      description: "Complete nail care kit with tools, files, and buffers",
      price: 18900,
      image: "https://www.ubuy.ge/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE4b2lJTE93ckwuX1NMMTA2M18uanBn.jpg",
      type: "Tool Set",
      size: "25 pieces",
      ingredients: "Stainless steel",
      duration: "Lifetime",
      rating: 4.9,
      reviews: 215
    },
    {
      id: 4,
      name: "Nail Strengthener Serum",
      description: "Advanced formula to strengthen and repair brittle nails",
      price: 8500,
      image: "https://media.glamour.com/photos/6697b5d98fb9df6712f2bb2d/1:1/w_2000,h_2000,c_limit/GL_11-Best-Nail-Strengtheners.jpg",
      type: "Treatment",
      size: "15ml",
      ingredients: "Biotin, Keratin, Vitamins",
      duration: "2 months",
      rating: 4.5,
      reviews: 92
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price).replace('NGN', '₦');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Products</h2>
            <p className="text-gray-600 text-lg">
              Discover our collection of high-quality nail products that will elevate your nail game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105 text-left"
                onClick={() => handleProductClick(product)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProductClick(product);
                  }
                }}
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={`${product.id}-star-${i}`} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-pink-600">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </>
  );
};

export default Products;