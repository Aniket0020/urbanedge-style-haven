
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop',
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
