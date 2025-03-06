
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Urban Clothing Brand</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
          Minimal. Timeless. Refined.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Clean designs for the modern lifestyle. Quality essentials that stand the test of time.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#collections" className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
            Shop Collection
          </a>
          <a href="#about" className="px-6 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
