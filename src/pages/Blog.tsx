import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Blog = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full inline-flex items-center">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights & Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore our latest articles, insights, and updates on technology, business, and innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              Our blog is launching soon! Stay tuned for expert tips, industry news, and in-depth guides.
            </p>
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 inline-flex items-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 