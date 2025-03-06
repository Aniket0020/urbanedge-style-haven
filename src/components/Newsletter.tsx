
const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Stay Connected</h2>
        <p className="mt-4 text-gray-600">
          Subscribe to receive updates on new collections and exclusive offers.
        </p>
        
        <form className="mt-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
