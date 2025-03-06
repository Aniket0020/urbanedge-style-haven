
const Journal = () => {
  return (
    <section id="journal" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Journal</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">Our Stories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1555529771-7888783a18d3?q=80&w=2087&auto=format&fit=crop" 
              alt="Sustainable Fashion" 
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">October 15, 2023</span>
              <h3 className="mt-2 text-xl font-medium text-gray-900">Sustainable Practices in Fashion</h3>
              <p className="mt-3 text-gray-600">Exploring how conscious design choices are reshaping the industry landscape.</p>
            </div>
          </article>
          
          <article className="border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=2098&auto=format&fit=crop" 
              alt="Minimalism in Design" 
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">September 28, 2023</span>
              <h3 className="mt-2 text-xl font-medium text-gray-900">The Art of Minimalism</h3>
              <p className="mt-3 text-gray-600">How simplicity in design creates timeless pieces for your wardrobe.</p>
            </div>
          </article>
          
          <article className="border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
              alt="Quality Materials" 
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">August 12, 2023</span>
              <h3 className="mt-2 text-xl font-medium text-gray-900">Quality over Quantity</h3>
              <p className="mt-3 text-gray-600">Why investing in fewer, better pieces leads to a more sustainable wardrobe.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Journal;
