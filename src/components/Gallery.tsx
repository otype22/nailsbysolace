
export const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1697472224-81q5P9hjV8L.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
      title: "Classic French Manicure",
      category: "Classic"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=400",
      title: "Glitter Nail Art",
      category: "Artistic"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=400",
      title: "Geometric Designs",
      category: "Modern"
    },
    {
      id: 4,
      image: "https://people.com/thmb/e6rSbv7N6xa1oyFlHc90KrnjarQ=/fit-in/1500x3333/filters:no_upscale():max_bytes(150000):strip_icc()/PEO-Morovan-Poly-Gel-Nail-Kit-Builder-Gel-for-Nails-David-Carr-0490.jpg-9637f52be3594da1b597d0c2be4831b7.jpg",
      title: "Ombre Gradient",
      category: "Trendy"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=400",
      title: "Floral Nail Art",
      category: "Artistic"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=400",
      title: "Minimalist Design",
      category: "Modern"
    }
  ];

  // Removed nextSlide and prevSlide as currentIndex is not used
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-gray-600 text-lg">
            Browse through our stunning collection of nail art designs and get inspired for your next visit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/2349077587619?text=Hello! I'd like to see more of your gallery and book an appointment"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;