import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            About Us
          </h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            Our NGO is dedicated to making a positive impact on society by focusing on various
            initiatives that bring about sustainable change.
          </p>
          <p className="text-lg text-gray-700 text-center mb-6">
            We believe in the power of community and work closely with volunteers, local leaders,
            and organizations to achieve our goals.
          </p>
          <p className="text-lg text-gray-700 text-center mb-6">
            Our mission is to improve lives by addressing key issues such as education, healthcare,
            and environmental conservation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
