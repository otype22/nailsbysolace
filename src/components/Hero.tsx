

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Transform Your <br />
              Nails <span className="text-pink-600">into Art</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience premium nail services and stunning designs at our salon. 
              Make your nails shine with elegance and style.
            </p>
            <a 
              href="https://wa.me/2349077587619?text=Hello! I'd like to book a nail appointment"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Book Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://m.media-amazon.com/images/I/71zqQ589vNS._SL1500_.jpg" 
                alt="Beautiful nail art" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;