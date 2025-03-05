
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="urban-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-left">
            <span className="text-edge-600 text-sm font-medium">OUR STORY</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Edge of Urban Design</h2>
            <p className="text-urban-600 text-lg leading-relaxed">
              Founded in 2018, UrbanEdge was born out of a desire to create clothing that balances minimalist design principles with the raw energy of urban life.
            </p>
            <p className="text-urban-600 leading-relaxed">
              Our design ethos is guided by a commitment to quality materials, sustainable practices, and timeless silhouettes that transcend seasonal trends. Each piece in our collection is meticulously crafted to provide versatility and longevity in your wardrobe.
            </p>
            <p className="text-urban-600 leading-relaxed">
              We believe clothing should be an expression of individual identity while maintaining a strong connection to the urban environment that inspires us daily.
            </p>
            <div className="pt-4">
              <a href="#" className="urban-button-outline inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animation-delay-400">
            <img 
              src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=2070&auto=format&fit=crop" 
              alt="UrbanEdge atelier" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg max-w-xs">
              <p className="font-display text-lg font-medium">
                "We don't follow trends. We create timeless pieces that become part of your personal expression."
              </p>
              <p className="mt-4 text-urban-500 text-sm">Alex Chen, Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
