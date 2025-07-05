import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const message = `Hello! I'd like to subscribe to your newsletter. Email: ${email}`;
      window.open(`https://wa.me/2349077587619?text=${encodeURIComponent(message)}`, '_blank');
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest nail trends, exclusive offers, and beauty tips delivered straight to your inbox
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 rounded-full px-8 py-4 inline-block">
              <p className="text-white font-semibold">
                Thank you for subscribing! We'll be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;