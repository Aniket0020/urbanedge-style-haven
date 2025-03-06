
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Journal from '@/components/Journal';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="w-full min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Journal />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
