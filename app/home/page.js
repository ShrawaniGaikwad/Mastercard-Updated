import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Welcome to Our NGO
          </h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            We are committed to making a difference in the community through our various projects and initiatives.
          </p>
          <div className="flex justify-center">
            <a
              href="/projects"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md"
            >
              Explore Our Projects
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
