
const collections = [
  {
    id: 1,
    title: 'Essentials',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Shop</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">Our Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <a 
              key={collection.id}
              href="#"
              className="group block"
            >
              <div className="overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-center text-gray-900">{collection.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
