import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            GigsGig Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and updates from the world of student entrepreneurship and gig economy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
              <div className="text-sm text-green-600 font-medium mb-2">Student Success</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How One Student Turned Side Gigs into a Full-Time Business
              </h3>
              <p className="text-gray-700 mb-4">
                Discover how Sarah leveraged our platform to build a successful freelance writing career while completing her degree.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By John Doe</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
              <div className="text-sm text-blue-600 font-medium mb-2">Platform Updates</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                New Features: Enhanced Task Matching Algorithm
              </h3>
              <p className="text-gray-700 mb-4">
                Learn about our latest AI-powered improvements that help students find the perfect gigs faster.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By Jane Smith</span>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
              <div className="text-sm text-purple-600 font-medium mb-2">Community</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Building Strong Campus Communities: A Case Study
              </h3>
              <p className="text-gray-700 mb-4">
                How universities are using GigsGig to foster entrepreneurship and skill-sharing among students.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By Mike Johnson</span>
                <span className="mx-2">•</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Latest Posts</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-sm text-green-600 font-medium mb-2">Tips & Tricks</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    10 Essential Skills Every Student Entrepreneur Should Learn
                  </h3>
                  <p className="text-gray-700 mb-4">
                    From time management to client communication, master these skills to succeed in the gig economy.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By Sarah Wilson</span>
                    <span className="mx-2">•</span>
                    <span>Feb 15, 2024</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-sm text-blue-600 font-medium mb-2">Industry Insights</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    The Rise of Student Gig Workers: Trends and Predictions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Explore the growing trend of students participating in the gig economy and what it means for the future.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By David Chen</span>
                    <span className="mx-2">•</span>
                    <span>Feb 10, 2024</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest insights on student entrepreneurship and platform updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}