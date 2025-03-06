
const Newsletter = () => {
  return (
    <section className="py-24 bg-urban-800 text-white">
      <div className="urban-container">
        <div className="max-w-3xl mx-auto text-center space-y-6 opacity-0 animate-fade-in">
          <span className="text-edge-300 text-sm font-medium">JOIN THE COMMUNITY</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Stay Connected
          </h2>
          <p className="text-urban-100 text-lg max-w-xl mx-auto">
            Subscribe to receive exclusive updates on new collections, special events, and insights from our design team.
          </p>
          
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-urban-700/70 border border-urban-600 focus:border-edge-400 focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="urban-button bg-edge-600 hover:bg-edge-700 text-white"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-urban-300 text-sm mt-4">
            By subscribing you agree to our privacy policy. We respect your inbox and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
