
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import { Gallery } from './components/Gallery';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Products />
        <About />
        <Gallery />
        
        <Blog />
        <Contact />
        <Newsletter />
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;