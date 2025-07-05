
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Nail Trends You'll Love in 2025",
      excerpt: "Discover the hottest nail trends that are taking the beauty world by storm this year.",
      image: "https://i.pinimg.com/736x/08/f5/54/08f5540485f0711f5431f1c3187bd9d2.jpg",
      date: "Jan 15, 2025",
      author: "Sarah Beauty",
      category: "Trends"
    },
    {
      id: 2,
      title: "Healthy Nails, Happy Life: Essential Care Tips",
      excerpt: "Learn how to maintain healthy, strong nails with these professional tips and tricks.",
      image: "https://i.pinimg.com/736x/47/78/52/4778527fcbeda5bd7fc5c7f399807e62.jpg",
      date: "Jan 10, 2025",
      author: "Dr. Maria",
      category: "Health"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nail Care Blog</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, tips, and techniques in nail care and art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-50 object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center group">
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/2349077587619?text=Hello! I'd like to learn more about nail care tips"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;