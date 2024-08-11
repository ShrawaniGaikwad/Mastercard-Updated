import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Our Projects
          </h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            We are proud to work on a variety of projects that aim to make a lasting impact in our
            community. Here are some of the initiatives we are currently focused on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project One</h2>
              <p className="text-gray-700">
                Description of the project and how it is making a difference in the community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Two</h2>
              <p className="text-gray-700">
                Description of the project and how it is making a difference in the community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Three</h2>
              <p className="text-gray-700">
                Description of the project and how it is making a difference in the community.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
