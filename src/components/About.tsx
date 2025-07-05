import React from 'react';
import { Award, Users, Heart, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '7+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Heart, value: '1000+', label: 'Nail Arts Created' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const features = [
    {
      title: 'Premium Quality',
      description: 'We use only the finest nail products and tools from leading brands'
    },
    {
      title: 'Expert Technicians',
      description: 'Our skilled nail artists are trained in the latest techniques and trends'
    },
    {
      title: 'Hygienic Environment',
      description: 'We maintain the highest standards of cleanliness and sanitation'
    },
    {
      title: 'Creative Designs',
      description: 'From classic to contemporary, we bring your nail art visions to life'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Salon</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn more about how we bring your nail dreams to life with professional care and artistic excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <stat.icon className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Professional Nail Care Since 2018
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Nails by Solace, we understand that your nails are more than just a beauty statement - they're an expression of your personality. Since 2018, we've been dedicated to providing exceptional nail care services that combine artistry with the highest standards of hygiene and professionalism.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://wa.me/2349077587619?text=Hello! I'd like to learn more about your services"
                className="mt-8 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
            
            <div className="h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Nail salon interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;