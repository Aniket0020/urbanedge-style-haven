
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Street Essentials',
    description: 'Urban silhouettes redefined with premium fabrics and contemporary cuts.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop',
    color: 'bg-urban-900',
  },
  {
    id: 2,
    title: 'Monochrome Series',
    description: 'Timeless color stories for the modern minimalist wardobe.',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1738&auto=format&fit=crop',
    color: 'bg-urban-800',
  },
  {
    id: 3,
    title: 'Technical Outerwear',
    description: 'Function meets form with weather-ready pieces designed for urban life.',
    image: 'https://images.unsplash.com/photo-1541346160430-93fcee38d521?q=80&w=1740&auto=format&fit=crop',
    color: 'bg-urban-700',
  },
];

const Collections = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="collections" className="py-24 bg-secondary">
      <div className="urban-container">
        <div className="mb-16 opacity-0 animate-fade-in">
          <span className="text-edge-600 text-sm font-medium">DISCOVER</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className={cn(
                "group cursor-pointer overflow-hidden relative opacity-0",
                `animate-fade-in animation-delay-${index * 200}`
              )}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="image-wrapper aspect-[4/5]">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={cn(
                "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500",
                "bg-gradient-to-t from-black/80 to-transparent text-white",
                "transform translate-y-0 group-hover:translate-y-0"
              )}>
                <h3 className="font-display text-2xl font-semibold">{collection.title}</h3>
                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{collection.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-white/90 hover:text-white group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
