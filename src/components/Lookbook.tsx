
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617551307578-7985955e7a62?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1936&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1972&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop',
];

const Lookbook = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };
    
    scrollContainer.addEventListener('wheel', handleWheel);
    
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);
  
  return (
    <section id="lookbook" className="py-24 bg-urban-50">
      <div className="urban-container mb-12">
        <div className="flex justify-between items-end mb-8 opacity-0 animate-fade-in">
          <div>
            <span className="text-edge-600 text-sm font-medium">VISUAL STORY</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Fall/Winter Lookbook
            </h2>
          </div>
          <a href="#" className="urban-button-outline">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar pb-8 px-4 md:px-8 space-x-6 opacity-0 animate-fade-in animation-delay-200"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[300px] md:w-[400px] image-wrapper"
          >
            <img 
              src={image} 
              alt={`Lookbook image ${index + 1}`}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lookbook;
