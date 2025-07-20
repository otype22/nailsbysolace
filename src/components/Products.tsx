import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  type: string;
  size: string;
  ingredients: string;
  duration: string;
  rating: number;
  reviews: number;
};

const generateCategoryProducts = (category: any, productCount: number) => {
  return Array.from({ length: productCount }, (_, i) => {
    const productNumber = i + 1;
    return {
      id: parseInt(`${category.prefix.charCodeAt(0)}${productNumber}`),
      name: `${category.name.split(' ')[0]} Product ${productNumber}`,
      description: `Premium ${category.type.toLowerCase()} product with amazing features`,
      price: 5000 + (productNumber * 1000),
      image: `/assets/img/${category.prefix}${productNumber}.jpeg`,
      images: [
        `/assets/img/${category.prefix}${productNumber}.jpeg`,
        `/assets/img/${category.prefix}${productNumber}-2.jpeg`,
        `/assets/img/${category.prefix}${productNumber}-3.jpeg`
      ],
      type: category.type,
      size: `${productNumber * 2} pieces`,
      ingredients: "High-quality materials",
      duration: productNumber % 2 === 0 ? "4 weeks" : "2 months",
      rating: 4 + (productNumber * 0.1) % 1,
      reviews: productNumber * 10
    };
  });
};

const generateAllCategories = () => {
  const PRODUCTS_PER_CATEGORY = 2;
  const CATEGORIES = [
    { name: "Gel Polish Collection", prefix: 'd', type: "Gel Polish" },
    { name: "Nail Art Collection", prefix: 'a', type: "Nail Art" },
    { name: "Professional Tools", prefix: 'b', type: "Nail Tools" }
  ];

  return CATEGORIES.map(category => ({
    name: category.name,
    products: generateCategoryProducts(category, PRODUCTS_PER_CATEGORY)
  }));
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price).replace('NGN', '₦');
};

const ProductCard = ({ 
  product,
  onProductClick,
  onAddToCart 
}: {
  product: Product;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onProductClick(product);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <button
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        onClick={() => onProductClick(product)}
        onKeyDown={handleKeyDown}
        aria-label={`View details for ${product.name}`}
      >
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/img/naills.jpeg';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={`${product.id}-star-${star}`} 
                  className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-bold text-pink-600">
              {formatPrice(product.price)}
            </div>
          </div>
        </div>
      </button>
      
      <button
        onClick={(e) => onAddToCart(product, e)}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-1 text-sm mx-4 mb-4"
      >
        <ShoppingCart className="h-3 w-3" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<{name: string, products: Product[]}[]>([]);
  const { dispatch } = useCart();

  useEffect(() => {
    setCategories(generateAllCategories());
  }, []);

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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Collections</h2>
            <p className="text-gray-600 text-lg">
              Explore our extensive range of nail products
            </p>
          </div>

          {categories.map((category) => (
            <section key={category.name} className="mb-20">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b border-pink-200">
                {category.name} ({category.products.length} products)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={handleProductClick}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </section>
          ))}
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