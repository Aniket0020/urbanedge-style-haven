
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/40 to-black/10 absolute z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop"
          alt="Urban fashion on display"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="urban-container relative z-10">
        <div className="max-w-xl text-white space-y-6 opacity-0 animate-fade-in">
          <span className="inline-block text-xs uppercase tracking-wider border-b pb-1">Fall/Winter 2023</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Redefine Your Urban Aesthetic
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
            Where contemporary design meets the edge of urban sophistication. Crafted for those who define their own style.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#collections" className="urban-button bg-white text-black hover:bg-urban-200">
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#about" className="urban-button-outline border-white text-white hover:bg-white hover:text-black">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
