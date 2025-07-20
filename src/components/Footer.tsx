import { MapPin, Phone, Mail, Clock,  InstagramIcon, Twitter, Youtube, FacebookIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Manicure',
    'Pedicure', 
    'Gel Nails',
    'Acrylic Nails',
    'Nail Art',
    'Nail Repair'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-6">
              💅 Nails by Solace
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your nails into works of art with our professional nail care services and creative designs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_Adaeze Emmanuel" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-1" />
                <div>
                  <p className="text-gray-400">nails by Solace</p>
                  <p className="text-gray-400">ebelu Port Harcourt, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <p className="text-gray-400">+234 907 758 7619</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <p className="text-gray-400"></p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-pink-400 mt-1" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-400"> Sun: 12:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Nails by Solace. All rights reserved. Designed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;