
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">About Us</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">Simplicity in Design</h2>
            <p className="mt-6 text-gray-600">
              Founded with a simple mission: to create timeless clothing that lasts. We focus on quality materials, clean design, and sustainable practices.
            </p>
            <p className="mt-4 text-gray-600">
              Every piece in our collection is designed to be versatile, comfortable, and durable - clothing that becomes a part of your everyday story.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1579447892067-33f3c984d35d?q=80&w=2069&auto=format&fit=crop"
              alt="Our design studio" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
