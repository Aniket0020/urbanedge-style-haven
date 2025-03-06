
import { ArrowRight } from 'lucide-react';

const journalEntries = [
  {
    id: 1,
    title: 'The Art of Sustainable Fashion',
    excerpt: 'Exploring how conscious design choices are reshaping the industry landscape.',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Urban Textures: Material Innovation',
    excerpt: 'How technical fabrics are transforming the functionality of everyday streetwear.',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Monochrome Manifesto',
    excerpt: 'Minimalism as a powerful form of self-expression in the age of excess.',
    date: 'Aug 12, 2023',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1935&auto=format&fit=crop',
  },
];

const Journal = () => {
  return (
    <section id="journal" className="py-24">
      <div className="urban-container">
        <div className="flex justify-between items-end mb-16 opacity-0 animate-fade-in">
          <div>
            <span className="text-edge-600 text-sm font-medium">INSIGHTS</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Journal
            </h2>
          </div>
          <a href="#" className="urban-button-outline">
            All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <a 
              key={entry.id} 
              href="#" 
              className={`group opacity-0 animate-fade-in animation-delay-${index * 200}`}
            >
              <div className="image-wrapper">
                <img 
                  src={entry.image} 
                  alt={entry.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="mt-6 space-y-3">
                <span className="text-sm text-urban-500">{entry.date}</span>
                <h3 className="font-display text-xl font-semibold group-hover:text-edge-600 transition-colors">
                  {entry.title}
                </h3>
                <p className="text-urban-600">{entry.excerpt}</p>
                <div className="pt-2 flex items-center text-sm font-medium group-hover:text-edge-600 transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
