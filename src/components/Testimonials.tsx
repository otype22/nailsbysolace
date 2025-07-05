import  { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Client",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Absolutely love this nail salon! The attention to detail is incredible, and the nail art designs are always beyond my expectations. The staff is professional and the environment is so relaxing."
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Beauty Enthusiast",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I've been going to Nails by Solace for over a year now, and I'm never disappointed. The quality of their work is exceptional, and they always stay up-to-date with the latest trends."
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Bridal Client",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "They did my wedding nails and they were absolutely perfect! The team understood exactly what I wanted and delivered beyond my dreams. Highly recommend for special occasions!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 text-lg">
            See what our satisfied clients have to say about their experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star
                    key={`${testimonials[currentTestimonial].id}-star-${i}`}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-pink-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-pink-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;