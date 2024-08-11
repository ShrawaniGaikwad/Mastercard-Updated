import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            We'd love to hear from you! Whether you have a question about our projects, want to get
            involved, or just want to say hello, feel free to reach out.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
